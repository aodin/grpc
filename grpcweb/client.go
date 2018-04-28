package main

import (
	"fmt"
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	things "github.com/aodin/grpcweb/go"
)

var (
	port     = 9090
	certFile = "./localhost.crt"
)

func main() {
	creds, err := credentials.NewClientTLSFromFile(certFile, "")
	if err != nil {
		log.Fatalf("TLS creation failed: %v", err)
	}
	conn, err := grpc.Dial(
		fmt.Sprintf("localhost:%d", port),
		grpc.WithTransportCredentials(creds),
	)
	if err != nil {
		log.Fatalf("Dial failed: %v", err)
	}
	defer conn.Close()

	client := things.NewThingsClient(conn)

	msg := things.Thing{Id: 3432}

	resp, err := client.Create(context.Background(), &msg)
	if err != nil {
		log.Fatalf("Echo failed: %v", err)
	}

	log.Println(resp)
}
