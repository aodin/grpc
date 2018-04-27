package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"

	things "github.com/aodin/grpc/go"
)

var (
	port            = 9090
	tlsCertFilePath = "./localhost.crt"
	tlsKeyFilePath  = "./localhost.key"
)

var _ things.Thing

type service struct{}

var _ things.ThingsServer = &service{}

func (s *service) Create(ctx context.Context, thing *things.Thing) (*things.Thing, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	grpclog.Println("Create ID:", thing.GetId())
	return nil, grpc.Errorf(codes.Unimplemented, "Unimplemented")
}

func (s *service) Get(ctx context.Context, query *things.GetThingRequest) (*things.Thing, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	return nil, grpc.Errorf(codes.Unimplemented, "Unimplemented")
}

func (s *service) Query(query *things.QueryThingsRequest, stream things.Things_QueryServer) error {
	stream.SendHeader(metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-stream"))
	stream.SetTrailer(metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-stream"))
	return nil
}

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s %s", r.Method, r.URL.Path)
}

func main() {
	grpcServer := grpc.NewServer()
	things.RegisterThingsServer(grpcServer, &service{})
	grpclog.SetLogger(log.New(os.Stdout, "exampleserver: ", log.LstdFlags))

	wrappedServer := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: http.HandlerFunc(handler),
	}

	grpclog.Printf("Starting server. http port: %d, with TLS", port)

	if err := httpServer.ListenAndServeTLS(tlsCertFilePath, tlsKeyFilePath); err != nil {
		grpclog.Fatalf("failed starting http2 server: %v", err)
	}

	// if err := httpServer.ListenAndServe(); err != nil {
	// 	grpclog.Fatalf("failed starting http server: %v", err)
	// }
}
