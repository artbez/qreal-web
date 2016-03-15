//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


PropertyDAO = function(args) {
  this.propertyId = null;
  this.name = null;
  this.value = null;
  this.type = null;
  this.position = null;
  if (args) {
    if (args.propertyId !== undefined) {
      this.propertyId = args.propertyId;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.value !== undefined) {
      this.value = args.value;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.position !== undefined) {
      this.position = args.position;
    }
  }
};
PropertyDAO.prototype = {};
PropertyDAO.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.propertyId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.position = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PropertyDAO.prototype.write = function(output) {
  output.writeStructBegin('PropertyDAO');
  if (this.propertyId !== null && this.propertyId !== undefined) {
    output.writeFieldBegin('propertyId', Thrift.Type.I64, 1);
    output.writeI64(this.propertyId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 3);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 4);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.position !== null && this.position !== undefined) {
    output.writeFieldBegin('position', Thrift.Type.I32, 5);
    output.writeI32(this.position);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DefaultDiagramNodeDAO = function(args) {
  this.nodeId = null;
  this.jointObject = null;
  this.type = null;
  this.x = null;
  this.y = null;
  this.propertes = null;
  if (args) {
    if (args.nodeId !== undefined) {
      this.nodeId = args.nodeId;
    }
    if (args.jointObject !== undefined) {
      this.jointObject = args.jointObject;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.x !== undefined) {
      this.x = args.x;
    }
    if (args.y !== undefined) {
      this.y = args.y;
    }
    if (args.propertes !== undefined) {
      this.propertes = args.propertes;
    }
  }
};
DefaultDiagramNodeDAO.prototype = {};
DefaultDiagramNodeDAO.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.nodeId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.jointObject = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.x = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.y = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.propertes = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new PropertyDAO();
          elem6.read(input);
          this.propertes.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DefaultDiagramNodeDAO.prototype.write = function(output) {
  output.writeStructBegin('DefaultDiagramNodeDAO');
  if (this.nodeId !== null && this.nodeId !== undefined) {
    output.writeFieldBegin('nodeId', Thrift.Type.I64, 1);
    output.writeI64(this.nodeId);
    output.writeFieldEnd();
  }
  if (this.jointObject !== null && this.jointObject !== undefined) {
    output.writeFieldBegin('jointObject', Thrift.Type.STRING, 2);
    output.writeString(this.jointObject);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 3);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.x !== null && this.x !== undefined) {
    output.writeFieldBegin('x', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.y);
    output.writeFieldEnd();
  }
  if (this.propertes !== null && this.propertes !== undefined) {
    output.writeFieldBegin('propertes', Thrift.Type.SET, 6);
    output.writeSetBegin(Thrift.Type.STRUCT, this.propertes.length);
    for (var iter7 in this.propertes)
    {
      if (this.propertes.hasOwnProperty(iter7))
      {
        iter7 = this.propertes[iter7];
        iter7.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LinkVertexDAO = function(args) {
  this.vertexId = null;
  this.x = null;
  this.y = null;
  this.number = null;
  if (args) {
    if (args.vertexId !== undefined) {
      this.vertexId = args.vertexId;
    }
    if (args.x !== undefined) {
      this.x = args.x;
    }
    if (args.y !== undefined) {
      this.y = args.y;
    }
    if (args.number !== undefined) {
      this.number = args.number;
    }
  }
};
LinkVertexDAO.prototype = {};
LinkVertexDAO.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.vertexId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.x = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.y = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.number = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LinkVertexDAO.prototype.write = function(output) {
  output.writeStructBegin('LinkVertexDAO');
  if (this.vertexId !== null && this.vertexId !== undefined) {
    output.writeFieldBegin('vertexId', Thrift.Type.I64, 1);
    output.writeI64(this.vertexId);
    output.writeFieldEnd();
  }
  if (this.x !== null && this.x !== undefined) {
    output.writeFieldBegin('x', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.y);
    output.writeFieldEnd();
  }
  if (this.number !== null && this.number !== undefined) {
    output.writeFieldBegin('number', Thrift.Type.I32, 4);
    output.writeI32(this.number);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LinkDAO = function(args) {
  this.linkId = null;
  this.jointObjectId = null;
  this.source = null;
  this.target = null;
  this.verices = null;
  this.properties = null;
  if (args) {
    if (args.linkId !== undefined) {
      this.linkId = args.linkId;
    }
    if (args.jointObjectId !== undefined) {
      this.jointObjectId = args.jointObjectId;
    }
    if (args.source !== undefined) {
      this.source = args.source;
    }
    if (args.target !== undefined) {
      this.target = args.target;
    }
    if (args.verices !== undefined) {
      this.verices = args.verices;
    }
    if (args.properties !== undefined) {
      this.properties = args.properties;
    }
  }
};
LinkDAO.prototype = {};
LinkDAO.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.linkId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.jointObjectId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.source = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.target = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size8 = 0;
        var _rtmp312;
        this.verices = [];
        var _etype11 = 0;
        _rtmp312 = input.readSetBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new LinkVertexDAO();
          elem14.read(input);
          this.verices.push(elem14);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.SET) {
        var _size15 = 0;
        var _rtmp319;
        this.properties = [];
        var _etype18 = 0;
        _rtmp319 = input.readSetBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = new PropertyDAO();
          elem21.read(input);
          this.properties.push(elem21);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LinkDAO.prototype.write = function(output) {
  output.writeStructBegin('LinkDAO');
  if (this.linkId !== null && this.linkId !== undefined) {
    output.writeFieldBegin('linkId', Thrift.Type.I64, 1);
    output.writeI64(this.linkId);
    output.writeFieldEnd();
  }
  if (this.jointObjectId !== null && this.jointObjectId !== undefined) {
    output.writeFieldBegin('jointObjectId', Thrift.Type.STRING, 2);
    output.writeString(this.jointObjectId);
    output.writeFieldEnd();
  }
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin('source', Thrift.Type.STRING, 3);
    output.writeString(this.source);
    output.writeFieldEnd();
  }
  if (this.target !== null && this.target !== undefined) {
    output.writeFieldBegin('target', Thrift.Type.STRING, 4);
    output.writeString(this.target);
    output.writeFieldEnd();
  }
  if (this.verices !== null && this.verices !== undefined) {
    output.writeFieldBegin('verices', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRUCT, this.verices.length);
    for (var iter22 in this.verices)
    {
      if (this.verices.hasOwnProperty(iter22))
      {
        iter22 = this.verices[iter22];
        iter22.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.properties !== null && this.properties !== undefined) {
    output.writeFieldBegin('properties', Thrift.Type.SET, 6);
    output.writeSetBegin(Thrift.Type.STRUCT, this.properties.length);
    for (var iter23 in this.properties)
    {
      if (this.properties.hasOwnProperty(iter23))
      {
        iter23 = this.properties[iter23];
        iter23.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DiagramDAO = function(args) {
  this.diagramId = null;
  this.name = null;
  this.creator = null;
  this.nodes = null;
  this.links = null;
  if (args) {
    if (args.diagramId !== undefined) {
      this.diagramId = args.diagramId;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.creator !== undefined) {
      this.creator = args.creator;
    }
    if (args.nodes !== undefined) {
      this.nodes = args.nodes;
    }
    if (args.links !== undefined) {
      this.links = args.links;
    }
  }
};
DiagramDAO.prototype = {};
DiagramDAO.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.diagramId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.creator = new User();
        this.creator.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.SET) {
        var _size24 = 0;
        var _rtmp328;
        this.nodes = [];
        var _etype27 = 0;
        _rtmp328 = input.readSetBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new DefaultDiagramNodeDAO();
          elem30.read(input);
          this.nodes.push(elem30);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size31 = 0;
        var _rtmp335;
        this.links = [];
        var _etype34 = 0;
        _rtmp335 = input.readSetBegin();
        _etype34 = _rtmp335.etype;
        _size31 = _rtmp335.size;
        for (var _i36 = 0; _i36 < _size31; ++_i36)
        {
          var elem37 = null;
          elem37 = new LinkDAO();
          elem37.read(input);
          this.links.push(elem37);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DiagramDAO.prototype.write = function(output) {
  output.writeStructBegin('DiagramDAO');
  if (this.diagramId !== null && this.diagramId !== undefined) {
    output.writeFieldBegin('diagramId', Thrift.Type.I64, 1);
    output.writeI64(this.diagramId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.creator !== null && this.creator !== undefined) {
    output.writeFieldBegin('creator', Thrift.Type.STRUCT, 3);
    this.creator.write(output);
    output.writeFieldEnd();
  }
  if (this.nodes !== null && this.nodes !== undefined) {
    output.writeFieldBegin('nodes', Thrift.Type.SET, 4);
    output.writeSetBegin(Thrift.Type.STRUCT, this.nodes.length);
    for (var iter38 in this.nodes)
    {
      if (this.nodes.hasOwnProperty(iter38))
      {
        iter38 = this.nodes[iter38];
        iter38.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.links !== null && this.links !== undefined) {
    output.writeFieldBegin('links', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRUCT, this.links.length);
    for (var iter39 in this.links)
    {
      if (this.links.hasOwnProperty(iter39))
      {
        iter39 = this.links[iter39];
        iter39.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

