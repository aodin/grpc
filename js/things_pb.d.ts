// package: things
// file: things.proto

import * as jspb from "google-protobuf";

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

