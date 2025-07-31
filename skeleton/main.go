package main

import (
	"log"
	"net/http"
	"os"

	"{GO_MODULE_NAME}/backend"
	"github.com/gorilla/mux"
)

var BIND_ADDR = func() string {
	if addr := os.Getenv("BIND_ADDR"); addr != "" {
		return addr
	}
	return "127.0.0.1:8080"
}()

func main() {
	r := mux.NewRouter().StrictSlash(true)
	if _, err := backend.AddRoutes(r); err != nil {
		log.Fatalf("Failed to add routes: %v", err)
	}
	log.Printf("Starting server on %s", BIND_ADDR)
	log.Fatal(http.ListenAndServe(BIND_ADDR, r))
}
