gRPC Web Example
====


[Example Go server](https://github.com/improbable-eng/grpc-web/blob/master/example/go/exampleserver/exampleserver.go)


#### Go compilation

```sh
protoc \
    --proto_path=./proto \
    --go_out=plugins=grpc:./go \
    ./proto/*.proto

protoc \
    --proto_path=./proto \
    --grpc-gateway_out=logtostderr=true:./go \
    --swagger_out=logtostderr=true:./swagger \
    ./proto/*.proto
```


#### Typescript compilation

```sh
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:./js \
--ts_out=service=true:./js \
-I ./proto \
proto/*.proto
```


### TLS

Auth examples: https://grpc.io/docs/guides/auth.html#examples

#### Self-signed certificates

`subjectAltName` is needed for Chrome 58+

```sh
openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 1024 -subj "/C=US/ST=CO/O=AARON ELLIS LLC/CN=localhost" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS:localhost")) -keyout localhost.key -out localhost.crt
```

Add the certificate to chrome using [this guide](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate)

Or enable Chrome's insecure localhost setting: chrome://flags/#allow-insecure-localhost