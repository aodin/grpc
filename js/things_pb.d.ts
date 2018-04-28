// package: things
// file: things.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Thing extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thing.AsObject;
  static toObject(includeInstance: boolean, msg: Thing): Thing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Thing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thing;
  static deserializeBinaryFromReader(message: Thing, reader: jspb.BinaryReader): Thing;
}

export namespace Thing {
  export type AsObject = {
    id: number,
    name: string,
    content: Uint8Array | string,
  }
}

export class QueryThingsRequest extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): void;

  getOrder(): string;
  setOrder(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryThingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryThingsRequest): QueryThingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryThingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryThingsRequest;
  static deserializeBinaryFromReader(message: QueryThingsRequest, reader: jspb.BinaryReader): QueryThingsRequest;
}

export namespace QueryThingsRequest {
  export type AsObject = {
    search: string,
    order: string,
    limit: number,
    offset: number,
  }
}

export class ThingsResponse extends jspb.Message {
  clearThingsList(): void;
  getThingsList(): Array<Thing>;
  setThingsList(value: Array<Thing>): void;
  addThings(value?: Thing, index?: number): Thing;

  getNext(): string;
  setNext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ThingsResponse): ThingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThingsResponse;
  static deserializeBinaryFromReader(message: ThingsResponse, reader: jspb.BinaryReader): ThingsResponse;
}

export namespace ThingsResponse {
  export type AsObject = {
    thingsList: Array<Thing.AsObject>,
    next: string,
  }
}

export class GetThingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThingRequest): GetThingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetThingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThingRequest;
  static deserializeBinaryFromReader(message: GetThingRequest, reader: jspb.BinaryReader): GetThingRequest;
}

export namespace GetThingRequest {
  export type AsObject = {
    id: number,
  }
}

export class CreateThingRequest extends jspb.Message {
  hasThing(): boolean;
  clearThing(): void;
  getThing(): Thing | undefined;
  setThing(value?: Thing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateThingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateThingRequest): CreateThingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateThingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateThingRequest;
  static deserializeBinaryFromReader(message: CreateThingRequest, reader: jspb.BinaryReader): CreateThingRequest;
}

export namespace CreateThingRequest {
  export type AsObject = {
    thing?: Thing.AsObject,
  }
}

export class UpdateThingRequest extends jspb.Message {
  hasThing(): boolean;
  clearThing(): void;
  getThing(): Thing | undefined;
  setThing(value?: Thing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateThingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateThingRequest): UpdateThingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateThingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateThingRequest;
  static deserializeBinaryFromReader(message: UpdateThingRequest, reader: jspb.BinaryReader): UpdateThingRequest;
}

export namespace UpdateThingRequest {
  export type AsObject = {
    thing?: Thing.AsObject,
  }
}

export class DeleteThingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteThingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteThingRequest): DeleteThingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteThingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteThingRequest;
  static deserializeBinaryFromReader(message: DeleteThingRequest, reader: jspb.BinaryReader): DeleteThingRequest;
}

export namespace DeleteThingRequest {
  export type AsObject = {
    id: number,
  }
}

