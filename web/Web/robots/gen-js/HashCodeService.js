//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

artemii.bezguzikov.qrealweb.HashCodeService_hashCode_args = function(args) {
  this.coord = null;
  if (args) {
    if (args.coord !== undefined) {
      this.coord = args.coord;
    }
  }
};
artemii.bezguzikov.qrealweb.HashCodeService_hashCode_args.prototype = {};
artemii.bezguzikov.qrealweb.HashCodeService_hashCode_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.coord = new artemii.bezguzikov.qrealweb.Coordinates();
        this.coord.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

artemii.bezguzikov.qrealweb.HashCodeService_hashCode_args.prototype.write = function(output) {
  output.writeStructBegin('HashCodeService_hashCode_args');
  if (this.coord !== null && this.coord !== undefined) {
    output.writeFieldBegin('coord', Thrift.Type.STRUCT, 1);
    this.coord.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

artemii.bezguzikov.qrealweb.HashCodeService_hashCode_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
artemii.bezguzikov.qrealweb.HashCodeService_hashCode_result.prototype = {};
artemii.bezguzikov.qrealweb.HashCodeService_hashCode_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

artemii.bezguzikov.qrealweb.HashCodeService_hashCode_result.prototype.write = function(output) {
  output.writeStructBegin('HashCodeService_hashCode_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

artemii.bezguzikov.qrealweb.HashCodeServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
artemii.bezguzikov.qrealweb.HashCodeServiceClient.prototype = {};
artemii.bezguzikov.qrealweb.HashCodeServiceClient.prototype.hashCode = function(coord, callback) {
  this.send_hashCode(coord, callback); 
  if (!callback) {
    return this.recv_hashCode();
  }
};

artemii.bezguzikov.qrealweb.HashCodeServiceClient.prototype.send_hashCode = function(coord, callback) {
  this.output.writeMessageBegin('hashCode', Thrift.MessageType.CALL, this.seqid);
  var args = new artemii.bezguzikov.qrealweb.HashCodeService_hashCode_args();
  args.coord = coord;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_hashCode();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

artemii.bezguzikov.qrealweb.HashCodeServiceClient.prototype.recv_hashCode = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new artemii.bezguzikov.qrealweb.HashCodeService_hashCode_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'hashCode failed: unknown result';
};