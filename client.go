package main

import (
	"log"

	context "golang.org/x/net/context"
	"google.golang.org/grpc"

	things "github.com/aodin/grpc/go"
	"github.com/aodin/grpc/server"
)

func main() {
	// FIXME use certs
	conn, err := grpc.Dial(server.Addr, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Dial failed: %v", err)
	}
	defer conn.Close()
	client := things.NewThingsClient(conn)

	created, err := client.Create(
		context.Background(),
		&things.CreateThingRequest{
			Thing: &things.Thing{Name: "Test"},
		},
	)
	if err != nil {
		log.Fatalf("Could not create thing: %v", err)
	}
	log.Println(created.Id)
}
