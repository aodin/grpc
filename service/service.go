package main

import (
	"fmt"
	"net"

	context "golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	things "github.com/aodin/grpc/go"
)

var Addr = ":10808"

type service struct {
	listener net.Listener
	grpcSrv  *grpc.Server
}

// service must implement the Things service interface
var _ things.ThingsServer = new(service)

func (srv *service) Create(ctx context.Context, in *things.Thing) (*things.Thing, error) {
	return &things.Thing{}, status.Errorf(
		codes.InvalidArgument,
		"The required parameter 'validUntil' is empty or missing",
	)
}

func (srv *service) Get(ctx context.Context, in *things.GetThingRequest) (*things.Thing, error) {
	return &things.Thing{
		Id: 1,
	}, nil
}

func (srv *service) Query(rq *things.QueryThingsRequest, stream things.Things_QueryServer) error {
	return nil
}

func New() (*service, error) {
	listener, err := net.Listen("tcp", Addr)
	if err != nil {
		return nil, fmt.Errorf("Listen failed: %v", err)
	}

	// FIXME use TLS certs via grpc.Creds and credentials.NewServerTLSFromFile
	grpcSrv := grpc.NewServer()
	srv := &service{
		listener: listener,
		grpcSrv:  grpcSrv,
	}
	things.RegisterThingsServer(grpcSrv, srv)
	return srv, nil
}

func main() {

}
