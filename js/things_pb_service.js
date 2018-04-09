// package: things
// file: things.proto

var things_pb = require("./things_pb");

var Things = (function () {
  function Things() {}
  Things.serviceName = "things.Things";
  return Things;
}());

Things.Create = {
  methodName: "Create",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.Thing,
  responseType: things_pb.Thing
};

Things.Get = {
  methodName: "Get",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.GetThingRequest,
  responseType: things_pb.Thing
};

Things.Query = {
  methodName: "Query",
  service: Things,
  requestStream: false,
  responseStream: true,
  requestType: things_pb.QueryThingsRequest,
  responseType: things_pb.Thing
};

exports.Things = Things;

