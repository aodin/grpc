package main

import (
	"log"

	"github.com/aodin/grpc/server"
)

func main() {
	srv, err := server.New()
	if err != nil {
		log.Fatalf("Server init failed: %v", err)
	}

	log.Printf("Server starting at address %s", server.Addr)
	if err = srv.Serve(); err != nil {
		log.Fatalf("Server serve failed: %v", err)
	}
}
