package main

import (
	"io"
	"log"

	context "golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	things "github.com/aodin/grpc/go"
	"github.com/aodin/grpc/server"
)

func main() {
	// Using TLS:
	creds, err := credentials.NewClientTLSFromFile(server.GetCertFile(), "")
	if err != nil {
		log.Fatalf("TLS creation failed: %v", err)
	}
	conn, err := grpc.Dial(
		server.Addr,
		grpc.WithTransportCredentials(creds),
	)
	if err != nil {
		log.Fatalf("Dial failed: %v", err)
	}
	defer conn.Close()

	// If not using TLS:
	// conn, err := grpc.Dial(server.Addr, grpc.WithInsecure())
	// if err != nil {
	// 	log.Fatalf("Dial failed: %v", err)
	// }
	// defer conn.Close()

	// Create the client using the connection of your choice
	client := things.NewThingsClient(conn)

	// Create a thing
	created, err := client.Create(
		context.Background(),
		&things.CreateThingRequest{
			Thing: things.New(7, "Test"),
		},
	)
	if err != nil {
		log.Printf("Could not create thing: %v", err)
	}
	log.Println(created)

	// Get a thing that does not exist
	one, err := client.Get(
		context.Background(),
		&things.GetThingRequest{
			Id: 1,
		},
	)
	if err != nil {
		log.Printf("Could not get thing: %v", err)
	}
	log.Println(one)

	// Get the thing that was created
	seven, err := client.Get(
		context.Background(),
		&things.GetThingRequest{
			Id: 7,
		},
	)
	if err != nil {
		log.Printf("Could not get thing: %v", err)
	}
	log.Println(seven)

	// Create another thing
	if _, err = client.Create(
		context.Background(),
		&things.CreateThingRequest{
			Thing: things.New(10, "Another"),
		},
	); err != nil {
		log.Printf("Could not create thing: %v", err)
	}

	// Stream the things
	query := &things.QueryThingsRequest{}
	stream, err := client.Query(context.Background(), query)
	if err != nil {
		log.Fatal(err)
	}

	for {
		thing, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("Query stream failed:", err)
		}
		log.Printf("streamed: %+v\n", thing)
	}
}
