import {grpc} from "grpc-web-client";

import {Things} from "../js/things_pb_service";
import {Thing, CreateThingRequest} from "../js/things_pb";

let thing = new Thing();
thing.setId(42);
thing.setName("gRPC web JS client");

let create = new CreateThingRequest();
create.setThing(thing);

grpc.unary(Things.Create, {
  request: create,
  host: "https://localhost:9090",
  onEnd: res => {
    const { status, statusMessage, headers, message, trailers } = res;
    console.log("headers", headers);
    if (status === grpc.Code.OK && message) {
      console.log("OK, got thing: ", message.toObject());
    } else {
      console.log("err:", status, statusMessage);
    }
  }
});
