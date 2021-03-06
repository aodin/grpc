/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.things.CreateThingRequest', null, global);
goog.exportSymbol('proto.things.DeleteThingRequest', null, global);
goog.exportSymbol('proto.things.GetThingRequest', null, global);
goog.exportSymbol('proto.things.QueryThingsRequest', null, global);
goog.exportSymbol('proto.things.Thing', null, global);
goog.exportSymbol('proto.things.ThingsResponse', null, global);
goog.exportSymbol('proto.things.UpdateThingRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.Thing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.Thing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.Thing.displayName = 'proto.things.Thing';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.Thing.prototype.toObject = function(opt_includeInstance) {
  return proto.things.Thing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.Thing} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.Thing.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.Thing}
 */
proto.things.Thing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.Thing;
  return proto.things.Thing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.Thing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.Thing}
 */
proto.things.Thing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.Thing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.Thing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.Thing} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.Thing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.things.Thing.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.things.Thing.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.things.Thing.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.things.Thing.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.things.Thing.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes content = 3;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.things.Thing.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.things.Thing.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.things.Thing.prototype.setContent = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.QueryThingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.QueryThingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.QueryThingsRequest.displayName = 'proto.things.QueryThingsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.QueryThingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.things.QueryThingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.QueryThingsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.QueryThingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    search: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: jspb.Message.getFieldWithDefault(msg, 2, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.QueryThingsRequest}
 */
proto.things.QueryThingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.QueryThingsRequest;
  return proto.things.QueryThingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.QueryThingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.QueryThingsRequest}
 */
proto.things.QueryThingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.QueryThingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.QueryThingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.QueryThingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.QueryThingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string search = 1;
 * @return {string}
 */
proto.things.QueryThingsRequest.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.things.QueryThingsRequest.prototype.setSearch = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string order = 2;
 * @return {string}
 */
proto.things.QueryThingsRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.things.QueryThingsRequest.prototype.setOrder = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.things.QueryThingsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.things.QueryThingsRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 offset = 4;
 * @return {number}
 */
proto.things.QueryThingsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.things.QueryThingsRequest.prototype.setOffset = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.ThingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.things.ThingsResponse.repeatedFields_, null);
};
goog.inherits(proto.things.ThingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.ThingsResponse.displayName = 'proto.things.ThingsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.things.ThingsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.ThingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.things.ThingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.ThingsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.ThingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    thingsList: jspb.Message.toObjectList(msg.getThingsList(),
    proto.things.Thing.toObject, includeInstance),
    next: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.ThingsResponse}
 */
proto.things.ThingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.ThingsResponse;
  return proto.things.ThingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.ThingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.ThingsResponse}
 */
proto.things.ThingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.things.Thing;
      reader.readMessage(value,proto.things.Thing.deserializeBinaryFromReader);
      msg.addThings(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.ThingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.ThingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.ThingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.ThingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.things.Thing.serializeBinaryToWriter
    );
  }
  f = message.getNext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Thing things = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.things.Thing>}
 */
proto.things.ThingsResponse.prototype.getThingsList = function() {
  return /** @type{!Array.<!proto.things.Thing>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.things.Thing, 1));
};


/** @param {!Array.<!proto.things.Thing>} value */
proto.things.ThingsResponse.prototype.setThingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.things.Thing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.things.Thing}
 */
proto.things.ThingsResponse.prototype.addThings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.things.Thing, opt_index);
};


proto.things.ThingsResponse.prototype.clearThingsList = function() {
  this.setThingsList([]);
};


/**
 * optional string next = 2;
 * @return {string}
 */
proto.things.ThingsResponse.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.things.ThingsResponse.prototype.setNext = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.GetThingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.GetThingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.GetThingRequest.displayName = 'proto.things.GetThingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.GetThingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.things.GetThingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.GetThingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.GetThingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.GetThingRequest}
 */
proto.things.GetThingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.GetThingRequest;
  return proto.things.GetThingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.GetThingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.GetThingRequest}
 */
proto.things.GetThingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.GetThingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.GetThingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.GetThingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.GetThingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.things.GetThingRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.things.GetThingRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.CreateThingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.CreateThingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.CreateThingRequest.displayName = 'proto.things.CreateThingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.CreateThingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.things.CreateThingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.CreateThingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.CreateThingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    thing: (f = msg.getThing()) && proto.things.Thing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.CreateThingRequest}
 */
proto.things.CreateThingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.CreateThingRequest;
  return proto.things.CreateThingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.CreateThingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.CreateThingRequest}
 */
proto.things.CreateThingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.things.Thing;
      reader.readMessage(value,proto.things.Thing.deserializeBinaryFromReader);
      msg.setThing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.CreateThingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.CreateThingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.CreateThingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.CreateThingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.things.Thing.serializeBinaryToWriter
    );
  }
};


/**
 * optional Thing thing = 1;
 * @return {?proto.things.Thing}
 */
proto.things.CreateThingRequest.prototype.getThing = function() {
  return /** @type{?proto.things.Thing} */ (
    jspb.Message.getWrapperField(this, proto.things.Thing, 1));
};


/** @param {?proto.things.Thing|undefined} value */
proto.things.CreateThingRequest.prototype.setThing = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.things.CreateThingRequest.prototype.clearThing = function() {
  this.setThing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.things.CreateThingRequest.prototype.hasThing = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.UpdateThingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.UpdateThingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.UpdateThingRequest.displayName = 'proto.things.UpdateThingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.UpdateThingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.things.UpdateThingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.UpdateThingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.UpdateThingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    thing: (f = msg.getThing()) && proto.things.Thing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.UpdateThingRequest}
 */
proto.things.UpdateThingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.UpdateThingRequest;
  return proto.things.UpdateThingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.UpdateThingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.UpdateThingRequest}
 */
proto.things.UpdateThingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.things.Thing;
      reader.readMessage(value,proto.things.Thing.deserializeBinaryFromReader);
      msg.setThing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.UpdateThingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.UpdateThingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.UpdateThingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.UpdateThingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.things.Thing.serializeBinaryToWriter
    );
  }
};


/**
 * optional Thing thing = 1;
 * @return {?proto.things.Thing}
 */
proto.things.UpdateThingRequest.prototype.getThing = function() {
  return /** @type{?proto.things.Thing} */ (
    jspb.Message.getWrapperField(this, proto.things.Thing, 1));
};


/** @param {?proto.things.Thing|undefined} value */
proto.things.UpdateThingRequest.prototype.setThing = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.things.UpdateThingRequest.prototype.clearThing = function() {
  this.setThing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.things.UpdateThingRequest.prototype.hasThing = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.things.DeleteThingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.things.DeleteThingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.things.DeleteThingRequest.displayName = 'proto.things.DeleteThingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.things.DeleteThingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.things.DeleteThingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.things.DeleteThingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.things.DeleteThingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.things.DeleteThingRequest}
 */
proto.things.DeleteThingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.things.DeleteThingRequest;
  return proto.things.DeleteThingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.things.DeleteThingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.things.DeleteThingRequest}
 */
proto.things.DeleteThingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.things.DeleteThingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.things.DeleteThingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.things.DeleteThingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.things.DeleteThingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.things.DeleteThingRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.things.DeleteThingRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.things);
