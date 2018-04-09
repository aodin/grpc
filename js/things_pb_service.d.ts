// package: things
// file: things.proto

import * as things_pb from "./things_pb";

type ThingsCreate = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.Thing;
  readonly responseType: typeof things_pb.Thing;
};

type ThingsGet = {
  readonly methodName: string;
  readonly service: typeof Things;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof things_pb.GetThingRequest;
  readonly responseType: typeof things_pb.Thing;
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
  static readonly Create: ThingsCreate;
  static readonly Get: ThingsGet;
  static readonly Query: ThingsQuery;
}
