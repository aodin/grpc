package server

import (
	"fmt"
	"net"
	"os"
	"path"
	"sync"

	"github.com/golang/protobuf/ptypes/empty"
	context "golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/status"

	things "github.com/aodin/grpc/go"
)

var (
	Addr     = "localhost:10808"
	certFile = "./localhost.crt"
	keyFile  = "./localhost.key"
)

func GetCertFile() string {
	gopath := os.Getenv("GOPATH")
	if gopath == "" {
		gopath = "."
	}
	return path.Join(gopath, "src/github.com/aodin/grpc/", certFile)
}

func GetKeyFile() string {
	gopath := os.Getenv("GOPATH")
	if gopath == "" {
		gopath = "."
	}
	return path.Join(gopath, "src/github.com/aodin/grpc/", keyFile)
}

var storage sync.Map

type server struct {
	listener net.Listener
	GrpcSrv  *grpc.Server
}

func (srv *server) Serve() error {
	return srv.GrpcSrv.Serve(srv.listener)
}

// server must implement the Things server interface
var _ things.ThingsServer = new(server)

func (srv *server) List(ctx context.Context, in *things.QueryThingsRequest) (*things.ThingsResponse, error) {
	// Range over the storage and save every thing to the response
	resp := &things.ThingsResponse{}
	storage.Range(func(key, value interface{}) bool {
		resp.Things = append(resp.Things, value.(*things.Thing))
		return true // Set false to stop iteration
	})
	return resp, nil
}

func (srv *server) Get(ctx context.Context, in *things.GetThingRequest) (*things.Thing, error) {
	// Get the thing by ID from storage
	id := in.GetId()
	value, ok := storage.Load(id)
	if !ok {
		return &things.Thing{}, status.Errorf(
			codes.NotFound,
			"No thing with key %d",
			id,
		)
	}

	thing := value.(*things.Thing)
	return thing, nil
}

func (srv *server) Create(ctx context.Context, in *things.CreateThingRequest) (*things.Thing, error) {
	// If the given thing is valid, save it to storage
	thing := in.GetThing()
	if thing == nil {
		return &things.Thing{}, status.Errorf(
			codes.InvalidArgument,
			"Thing is required",
		)
	}

	if err := thing.Validate(); err != nil {
		return &things.Thing{}, status.Errorf(
			codes.InvalidArgument,
			err.Error(),
		)
	}
	storage.Store(thing.Id, thing)
	return thing, nil
}

func (srv *server) Update(ctx context.Context, in *things.UpdateThingRequest) (*things.Thing, error) {
	// If the given thing is valid, save it to storage
	thing := in.GetThing()
	if thing == nil {
		return &things.Thing{}, status.Errorf(
			codes.InvalidArgument,
			"Thing is required",
		)
	}

	if err := thing.Validate(); err != nil {
		return &things.Thing{}, status.Errorf(
			codes.InvalidArgument,
			err.Error(),
		)
	}
	storage.Store(thing.Id, thing)
	return thing, nil
}

func (srv *server) Delete(ctx context.Context, in *things.DeleteThingRequest) (*empty.Empty, error) {
	// See if the thing exists, and if so, delete
	id := in.GetId()
	if _, ok := storage.Load(id); !ok {
		return &empty.Empty{}, status.Errorf(
			codes.NotFound,
			"No thing with key %d",
			id,
		)
	}
	storage.Delete(id)
	return &empty.Empty{}, nil
}

func (srv *server) Query(rq *things.QueryThingsRequest, stream things.Things_QueryServer) error {
	// Return all things in a stream
	var err error
	storage.Range(func(key, value interface{}) bool {
		err = stream.Send(value.(*things.Thing))
		return err == nil // Range will end if there was an error
	})
	return err // Will be nil unless send failed
}

func New() (*server, error) {
	// Create a listener
	listener, err := net.Listen("tcp", Addr)
	if err != nil {
		return nil, fmt.Errorf("Listen failed: %v", err)
	}

	// Using TLS
	creds, err := credentials.NewServerTLSFromFile(GetCertFile(), GetKeyFile())
	if err != nil {
		return nil, fmt.Errorf("Failed to create TLS credentials: %v", err)
	}
	grpcSrv := grpc.NewServer(grpc.Creds(creds))

	// If not using TLS, use NewServer without creds:
	// grpcSrv := grpc.NewServer()

	srv := &server{
		listener: listener,
		GrpcSrv:  grpcSrv,
	}
	things.RegisterThingsServer(grpcSrv, srv)
	return srv, nil
}
