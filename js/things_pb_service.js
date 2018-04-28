// package: things
// file: things.proto

var things_pb = require("./things_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");

var Things = (function () {
  function Things() {}
  Things.serviceName = "things.Things";
  return Things;
}());

Things.List = {
  methodName: "List",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.QueryThingsRequest,
  responseType: things_pb.ThingsResponse
};

Things.Get = {
  methodName: "Get",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.GetThingRequest,
  responseType: things_pb.Thing
};

Things.Create = {
  methodName: "Create",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.CreateThingRequest,
  responseType: things_pb.Thing
};

Things.Update = {
  methodName: "Update",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.UpdateThingRequest,
  responseType: things_pb.Thing
};

Things.Delete = {
  methodName: "Delete",
  service: Things,
  requestStream: false,
  responseStream: false,
  requestType: things_pb.DeleteThingRequest,
  responseType: google_protobuf_empty_pb.Empty
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

