// package: things
// file: things.proto

import * as things_pb from "./things_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

type ThingsList = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.QueryThingsRequest;
  readonly responseType: typeof things_pb.ThingsResponse;
};

type ThingsGet = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.GetThingRequest;
  readonly responseType: typeof things_pb.Thing;
};

type ThingsCreate = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.CreateThingRequest;
  readonly responseType: typeof things_pb.Thing;
};

type ThingsUpdate = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.UpdateThingRequest;
  readonly responseType: typeof things_pb.ThingsResponse;
};

type ThingsDelete = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.DeleteThingRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ThingsQuery = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof things_pb.QueryThingsRequest;
  readonly responseType: typeof things_pb.Thing;
};

export class Things {
  static readonly serviceName: string;
  static readonly List: ThingsList;
  static readonly Get: ThingsGet;
  static readonly Create: ThingsCreate;
  static readonly Update: ThingsUpdate;
  static readonly Delete: ThingsDelete;
  static readonly Query: ThingsQuery;
}
