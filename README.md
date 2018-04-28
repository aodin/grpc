gRPC Examples
====

Examples for using [protocol buffers](https://developers.google.com/protocol-buffers/) and [gRPC](https://grpc.io/). Includes:

1. Protocol buffers for an example CRUD service
2. Go server and client implementations of the CRUD service
3. Swagger for the CRUD service
4. A [gRPC gateway](https://github.com/grpc-ecosystem/grpc-gateway) bridge that registers the CRUD service
5. A Typescript [gRPC web](https://github.com/grpc/grpc-web) client for the CRUD service

*NOTE* The following commands should be run from the root of the project.


Protocol Buffers
----

Install the [protobuf compiler, `protoc`](https://github.com/google/protobuf).

[Additional documentation on developers.google.com](https://developers.google.com/protocol-buffers/)


Go compilation
----

Install the [Go protoc plugin](https://github.com/golang/protobuf/):

```sh
go get -u github.com/golang/protobuf/...
```

The following command will generate the gRPC server and client stubs for [Golang](https://golang.org/):

```sh
protoc \
    --proto_path=./proto \
    --go_out=plugins=grpc:./go \
    ./proto/*.proto
```

It compiled the `*.proto` files in the `/proto` directory and adds the generated Go code to the `/go` directory.

See `server.go` for the example server.

See `client.go` for an example client.


Swagger
----

Install the [protoc swagger plugin](https://github.com/grpc-ecosystem/grpc-gateway/tree/master/protoc-gen-swagger):

```sh
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
```

Swagger can then be generated with:

```sh
protoc \
    --proto_path=./proto \
    --swagger_out=logtostderr=true:./swagger \
    ./proto/*.proto
```

The swagger can be viewed using the [Swagger editor](https://editor.swagger.io/).

Gateway
----

```sh
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
```

```sh
protoc \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    --proto_path=./proto \
    --grpc-gateway_out=logtostderr=true:./go \
    ./proto/*.proto
```

The previous commands can also be combined into one:

```sh
protoc \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    --proto_path=./proto \
    --go_out=plugins=grpc:./go \
    --grpc-gateway_out=logtostderr=true:./go \
    --swagger_out=logtostderr=true:./swagger \
    ./proto/*.proto
```

See `client.go` for an example client.


gRPC Web
---

See `/grpcweb`.


#### Typescript compilation

To produce the Typescript required for [gRPC web](https://github.com/grpc/grpc-web), install the tools in `package.json`

```sh
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./js \
    --ts_out=service=true:./js \
    -I ./proto \
    proto/*.proto proto/google/**/*.proto
```

The client bundle is then built with [webpack](https://github.com/webpack/webpack):

```sh
npx webpack
```


Miscellaneous
----

[Square's protowrap tool](https://github.com/square/goprotowrap) helps when compiling multiple Go protoc packages.

```sh
go get -u github.com/square/goprotowrap/cmd/protowrap
```

### More examples

[gRPC Gateway's "a bit of everything" example](https://github.com/grpc-ecosystem/grpc-gateway/blob/master/examples/proto/examplepb/a_bit_of_everything.proto)

### Auth

[Example gRPC auth methods](https://grpc.io/docs/guides/auth.html#examples)

### TLS

Since gRPC uses HTTP 2, which requires HTTPS, knowing how to self-sign TLS certificates can help with local development.

#### Self-signed certificates

`subjectAltName` is needed for Chrome 58+

```sh
openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 1024 -subj "/C=US/ST=CO/O=AARON ELLIS LLC/CN=localhost" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS:localhost")) -keyout localhost.key -out localhost.crt
```

Add the certificate to chrome using [this guide](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate)

Or enable Chrome's insecure localhost setting: chrome://flags/#allow-insecure-localhost

Happy hacking!

aodin, 2018
