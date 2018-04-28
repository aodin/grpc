package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc/grpclog"

	things "github.com/aodin/grpc/go"
	"github.com/aodin/grpc/server"
)

var (
	port            = 9090
	tlsCertFilePath = "./localhost.crt"
	tlsKeyFilePath  = "./localhost.key"
)

var _ things.Thing

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s %s", r.Method, r.URL.Path)
}

func main() {
	srv, err := server.New()
	if err != nil {
		grpclog.Fatalf("failed to create things server: %v", err)
	}

	grpclog.SetLogger(log.New(os.Stdout, "exampleserver: ", log.LstdFlags))

	wrappedServer := grpcweb.WrapServer(srv.GrpcSrv)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: http.HandlerFunc(handler),
	}

	grpclog.Printf("Starting server. http port: %d, with TLS", port)

	if err = httpServer.ListenAndServeTLS(tlsCertFilePath, tlsKeyFilePath); err != nil {
		grpclog.Fatalf("failed starting http2 server: %v", err)
	}

	// if err := httpServer.ListenAndServe(); err != nil {
	// 	grpclog.Fatalf("failed starting http server: %v", err)
	// }
}
