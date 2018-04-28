package main

import (
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	things "github.com/aodin/grpc/go"
	"github.com/aodin/grpc/server"
)

func main() {
	creds, err := credentials.NewClientTLSFromFile(server.GetCertFile(), "")
	if err != nil {
		log.Fatalf("TLS creation failed: %v", err)
	}
	conn, err := grpc.Dial(
		"localhost:9090",
		grpc.WithTransportCredentials(creds),
	)
	if err != nil {
		log.Fatalf("Dial failed: %v", err)
	}
	defer conn.Close()

	client := things.NewThingsClient(conn)

	msg := &things.CreateThingRequest{
		Thing: &things.Thing{Id: 1337, Name: "gRPC web Go client"},
	}

	resp, err := client.Create(context.Background(), msg)
	if err != nil {
		log.Fatalf("Echo failed: %v", err)
	}

	log.Println(resp)
}
