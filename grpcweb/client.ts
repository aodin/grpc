import {grpc} from "grpc-web-client";

import {Things} from "./js/things_pb_service";
import {Thing} from "./js/things_pb";

let thing = new Thing();
thing.setId(45665);
grpc.unary(Things.Create, {
  request: thing,
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
