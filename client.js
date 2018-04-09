"use strict";
exports.__esModule = true;
var grpc_web_client_1 = require("grpc-web-client");
var things_pb_service_1 = require("./js/things_pb_service");
var things_pb_1 = require("./js/things_pb");
var thing = new things_pb_1.Thing();
thing.setId(45665);
grpc_web_client_1.grpc.unary(things_pb_service_1.Things.Create, {
    request: thing,
    host: "https://localhost:9090",
    onEnd: function (res) {
        var status = res.status, statusMessage = res.statusMessage, headers = res.headers, message = res.message, trailers = res.trailers;
        console.log("headers", headers);
        if (status === grpc_web_client_1.grpc.Code.OK && message) {
            console.log("OK, got thing: ", message.toObject());
        }
        else {
            console.log("err:", status, statusMessage);
        }
    }
});
