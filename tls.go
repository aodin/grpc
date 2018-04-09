package main

import (
	"fmt"
	"log"
	"net/http"
)

var (
	addr     = ":9091"
	certFile = "./localhost.crt"
	keyFile  = "./localhost.key"
)

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s %s", r.Method, r.URL.Path)
}

func main() {
	http.HandleFunc("/", index)
	log.Printf("Starting server on %s...", addr)
	log.Fatal(http.ListenAndServeTLS(addr, certFile, keyFile, nil))
}
