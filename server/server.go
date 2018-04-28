package server

import (
	"fmt"
	"net"

	"github.com/golang/protobuf/ptypes/empty"
	context "golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	things "github.com/aodin/grpc/go"
)

var Addr = ":10808"

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
	return &things.ThingsResponse{}, status.Errorf(
		codes.Unimplemented,
		"Unimplemented",
	)
}

func (srv *server) Get(ctx context.Context, in *things.GetThingRequest) (*things.Thing, error) {
	return &things.Thing{}, status.Errorf(
		codes.Unimplemented,
		"Unimplemented",
	)
}

func (srv *server) Create(ctx context.Context, in *things.CreateThingRequest) (*things.Thing, error) {
	return &things.Thing{}, status.Errorf(
		codes.Unimplemented,
		"Unimplemented",
	)
}

func (srv *server) Update(ctx context.Context, in *things.UpdateThingRequest) (*things.Thing, error) {
	return &things.Thing{}, status.Errorf(
		codes.Unimplemented,
		"Unimplemented",
	)
}

func (srv *server) Delete(ctx context.Context, in *things.DeleteThingRequest) (*empty.Empty, error) {
	return &empty.Empty{}, status.Errorf(
		codes.Unimplemented,
		"Unimplemented",
	)
}

func (srv *server) Query(rq *things.QueryThingsRequest, stream things.Things_QueryServer) error {
	return nil
}

func New() (*server, error) {
	listener, err := net.Listen("tcp", Addr)
	if err != nil {
		return nil, fmt.Errorf("Listen failed: %v", err)
	}

	// FIXME use TLS certs via grpc.Creds and credentials.NewServerTLSFromFile
	grpcSrv := grpc.NewServer()
	srv := &server{
		listener: listener,
		GrpcSrv:  grpcSrv,
	}
	things.RegisterThingsServer(grpcSrv, srv)
	return srv, nil
}
