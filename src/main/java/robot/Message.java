/**
 * Autogenerated by Thrift Compiler (0.9.2)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package robot;

import org.apache.thrift.scheme.IScheme;
import org.apache.thrift.scheme.SchemeFactory;
import org.apache.thrift.scheme.StandardScheme;

import org.apache.thrift.scheme.TupleScheme;
import org.apache.thrift.protocol.TTupleProtocol;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.EnumMap;
import java.util.EnumSet;
import java.util.Collections;
import java.util.BitSet;
import javax.annotation.Generated;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked"})
@Generated(value = "Autogenerated by Thrift Compiler (0.9.2)", date = "2016-3-6")
public class Message implements org.apache.thrift.TBase<Message, Message._Fields>, java.io.Serializable, Cloneable, Comparable<Message> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("Message");

  private static final org.apache.thrift.protocol.TField FROM_FIELD_DESC = new org.apache.thrift.protocol.TField("from", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField TYPE_FIELD_DESC = new org.apache.thrift.protocol.TField("type", org.apache.thrift.protocol.TType.STRING, (short)2);
  private static final org.apache.thrift.protocol.TField ROBOT_FIELD_DESC = new org.apache.thrift.protocol.TField("robot", org.apache.thrift.protocol.TType.STRUCT, (short)3);
  private static final org.apache.thrift.protocol.TField USER_FIELD_DESC = new org.apache.thrift.protocol.TField("user", org.apache.thrift.protocol.TType.STRING, (short)4);
  private static final org.apache.thrift.protocol.TField ROBOTS_FIELD_DESC = new org.apache.thrift.protocol.TField("robots", org.apache.thrift.protocol.TType.LIST, (short)5);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new MessageStandardSchemeFactory());
    schemes.put(TupleScheme.class, new MessageTupleSchemeFactory());
  }

  public String from; // required
  public String type; // required
  public RobotInfo robot; // required
  public String user; // required
  public List<RobotInfo> robots; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    FROM((short)1, "from"),
    TYPE((short)2, "type"),
    ROBOT((short)3, "robot"),
    USER((short)4, "user"),
    ROBOTS((short)5, "robots");

    private static final Map<String, _Fields> byName = new HashMap<String, _Fields>();

    static {
      for (_Fields field : EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // FROM
          return FROM;
        case 2: // TYPE
          return TYPE;
        case 3: // ROBOT
          return ROBOT;
        case 4: // USER
          return USER;
        case 5: // ROBOTS
          return ROBOTS;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final String _fieldName;

    _Fields(short thriftId, String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.FROM, new org.apache.thrift.meta_data.FieldMetaData("from", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.TYPE, new org.apache.thrift.meta_data.FieldMetaData("type", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.ROBOT, new org.apache.thrift.meta_data.FieldMetaData("robot", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, RobotInfo.class)));
    tmpMap.put(_Fields.USER, new org.apache.thrift.meta_data.FieldMetaData("user", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.ROBOTS, new org.apache.thrift.meta_data.FieldMetaData("robots", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.ListMetaData(org.apache.thrift.protocol.TType.LIST, 
            new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, RobotInfo.class))));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(Message.class, metaDataMap);
  }

  public Message() {
  }

  public Message(
    String from,
    String type,
    RobotInfo robot,
    String user,
    List<RobotInfo> robots)
  {
    this();
    this.from = from;
    this.type = type;
    this.robot = robot;
    this.user = user;
    this.robots = robots;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public Message(Message other) {
    if (other.isSetFrom()) {
      this.from = other.from;
    }
    if (other.isSetType()) {
      this.type = other.type;
    }
    if (other.isSetRobot()) {
      this.robot = new RobotInfo(other.robot);
    }
    if (other.isSetUser()) {
      this.user = other.user;
    }
    if (other.isSetRobots()) {
      List<RobotInfo> __this__robots = new ArrayList<RobotInfo>(other.robots.size());
      for (RobotInfo other_element : other.robots) {
        __this__robots.add(new RobotInfo(other_element));
      }
      this.robots = __this__robots;
    }
  }

  public Message deepCopy() {
    return new Message(this);
  }

  @Override
  public void clear() {
    this.from = null;
    this.type = null;
    this.robot = null;
    this.user = null;
    this.robots = null;
  }

  public String getFrom() {
    return this.from;
  }

  public Message setFrom(String from) {
    this.from = from;
    return this;
  }

  public void unsetFrom() {
    this.from = null;
  }

  /** Returns true if field from is set (has been assigned a value) and false otherwise */
  public boolean isSetFrom() {
    return this.from != null;
  }

  public void setFromIsSet(boolean value) {
    if (!value) {
      this.from = null;
    }
  }

  public String getType() {
    return this.type;
  }

  public Message setType(String type) {
    this.type = type;
    return this;
  }

  public void unsetType() {
    this.type = null;
  }

  /** Returns true if field type is set (has been assigned a value) and false otherwise */
  public boolean isSetType() {
    return this.type != null;
  }

  public void setTypeIsSet(boolean value) {
    if (!value) {
      this.type = null;
    }
  }

  public RobotInfo getRobot() {
    return this.robot;
  }

  public Message setRobot(RobotInfo robot) {
    this.robot = robot;
    return this;
  }

  public void unsetRobot() {
    this.robot = null;
  }

  /** Returns true if field robot is set (has been assigned a value) and false otherwise */
  public boolean isSetRobot() {
    return this.robot != null;
  }

  public void setRobotIsSet(boolean value) {
    if (!value) {
      this.robot = null;
    }
  }

  public String getUser() {
    return this.user;
  }

  public Message setUser(String user) {
    this.user = user;
    return this;
  }

  public void unsetUser() {
    this.user = null;
  }

  /** Returns true if field user is set (has been assigned a value) and false otherwise */
  public boolean isSetUser() {
    return this.user != null;
  }

  public void setUserIsSet(boolean value) {
    if (!value) {
      this.user = null;
    }
  }

  public int getRobotsSize() {
    return (this.robots == null) ? 0 : this.robots.size();
  }

  public java.util.Iterator<RobotInfo> getRobotsIterator() {
    return (this.robots == null) ? null : this.robots.iterator();
  }

  public void addToRobots(RobotInfo elem) {
    if (this.robots == null) {
      this.robots = new ArrayList<RobotInfo>();
    }
    this.robots.add(elem);
  }

  public List<RobotInfo> getRobots() {
    return this.robots;
  }

  public Message setRobots(List<RobotInfo> robots) {
    this.robots = robots;
    return this;
  }

  public void unsetRobots() {
    this.robots = null;
  }

  /** Returns true if field robots is set (has been assigned a value) and false otherwise */
  public boolean isSetRobots() {
    return this.robots != null;
  }

  public void setRobotsIsSet(boolean value) {
    if (!value) {
      this.robots = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case FROM:
      if (value == null) {
        unsetFrom();
      } else {
        setFrom((String)value);
      }
      break;

    case TYPE:
      if (value == null) {
        unsetType();
      } else {
        setType((String)value);
      }
      break;

    case ROBOT:
      if (value == null) {
        unsetRobot();
      } else {
        setRobot((RobotInfo)value);
      }
      break;

    case USER:
      if (value == null) {
        unsetUser();
      } else {
        setUser((String)value);
      }
      break;

    case ROBOTS:
      if (value == null) {
        unsetRobots();
      } else {
        setRobots((List<RobotInfo>)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case FROM:
      return getFrom();

    case TYPE:
      return getType();

    case ROBOT:
      return getRobot();

    case USER:
      return getUser();

    case ROBOTS:
      return getRobots();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case FROM:
      return isSetFrom();
    case TYPE:
      return isSetType();
    case ROBOT:
      return isSetRobot();
    case USER:
      return isSetUser();
    case ROBOTS:
      return isSetRobots();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof Message)
      return this.equals((Message)that);
    return false;
  }

  public boolean equals(Message that) {
    if (that == null)
      return false;

    boolean this_present_from = true && this.isSetFrom();
    boolean that_present_from = true && that.isSetFrom();
    if (this_present_from || that_present_from) {
      if (!(this_present_from && that_present_from))
        return false;
      if (!this.from.equals(that.from))
        return false;
    }

    boolean this_present_type = true && this.isSetType();
    boolean that_present_type = true && that.isSetType();
    if (this_present_type || that_present_type) {
      if (!(this_present_type && that_present_type))
        return false;
      if (!this.type.equals(that.type))
        return false;
    }

    boolean this_present_robot = true && this.isSetRobot();
    boolean that_present_robot = true && that.isSetRobot();
    if (this_present_robot || that_present_robot) {
      if (!(this_present_robot && that_present_robot))
        return false;
      if (!this.robot.equals(that.robot))
        return false;
    }

    boolean this_present_user = true && this.isSetUser();
    boolean that_present_user = true && that.isSetUser();
    if (this_present_user || that_present_user) {
      if (!(this_present_user && that_present_user))
        return false;
      if (!this.user.equals(that.user))
        return false;
    }

    boolean this_present_robots = true && this.isSetRobots();
    boolean that_present_robots = true && that.isSetRobots();
    if (this_present_robots || that_present_robots) {
      if (!(this_present_robots && that_present_robots))
        return false;
      if (!this.robots.equals(that.robots))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_from = true && (isSetFrom());
    list.add(present_from);
    if (present_from)
      list.add(from);

    boolean present_type = true && (isSetType());
    list.add(present_type);
    if (present_type)
      list.add(type);

    boolean present_robot = true && (isSetRobot());
    list.add(present_robot);
    if (present_robot)
      list.add(robot);

    boolean present_user = true && (isSetUser());
    list.add(present_user);
    if (present_user)
      list.add(user);

    boolean present_robots = true && (isSetRobots());
    list.add(present_robots);
    if (present_robots)
      list.add(robots);

    return list.hashCode();
  }

  @Override
  public int compareTo(Message other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetFrom()).compareTo(other.isSetFrom());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetFrom()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.from, other.from);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetType()).compareTo(other.isSetType());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetType()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.type, other.type);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetRobot()).compareTo(other.isSetRobot());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetRobot()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.robot, other.robot);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetUser()).compareTo(other.isSetUser());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetUser()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.user, other.user);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetRobots()).compareTo(other.isSetRobots());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetRobots()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.robots, other.robots);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    schemes.get(iprot.getScheme()).getScheme().read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    schemes.get(oprot.getScheme()).getScheme().write(oprot, this);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder("Message(");
    boolean first = true;

    sb.append("from:");
    if (this.from == null) {
      sb.append("null");
    } else {
      sb.append(this.from);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("type:");
    if (this.type == null) {
      sb.append("null");
    } else {
      sb.append(this.type);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("robot:");
    if (this.robot == null) {
      sb.append("null");
    } else {
      sb.append(this.robot);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("user:");
    if (this.user == null) {
      sb.append("null");
    } else {
      sb.append(this.user);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("robots:");
    if (this.robots == null) {
      sb.append("null");
    } else {
      sb.append(this.robots);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
    if (robot != null) {
      robot.validate();
    }
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, ClassNotFoundException {
    try {
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class MessageStandardSchemeFactory implements SchemeFactory {
    public MessageStandardScheme getScheme() {
      return new MessageStandardScheme();
    }
  }

  private static class MessageStandardScheme extends StandardScheme<Message> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, Message struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // FROM
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.from = iprot.readString();
              struct.setFromIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // TYPE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.type = iprot.readString();
              struct.setTypeIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // ROBOT
            if (schemeField.type == org.apache.thrift.protocol.TType.STRUCT) {
              struct.robot = new RobotInfo();
              struct.robot.read(iprot);
              struct.setRobotIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 4: // USER
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.user = iprot.readString();
              struct.setUserIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 5: // ROBOTS
            if (schemeField.type == org.apache.thrift.protocol.TType.LIST) {
              {
                org.apache.thrift.protocol.TList _list0 = iprot.readListBegin();
                struct.robots = new ArrayList<RobotInfo>(_list0.size);
                RobotInfo _elem1;
                for (int _i2 = 0; _i2 < _list0.size; ++_i2)
                {
                  _elem1 = new RobotInfo();
                  _elem1.read(iprot);
                  struct.robots.add(_elem1);
                }
                iprot.readListEnd();
              }
              struct.setRobotsIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, Message struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.from != null) {
        oprot.writeFieldBegin(FROM_FIELD_DESC);
        oprot.writeString(struct.from);
        oprot.writeFieldEnd();
      }
      if (struct.type != null) {
        oprot.writeFieldBegin(TYPE_FIELD_DESC);
        oprot.writeString(struct.type);
        oprot.writeFieldEnd();
      }
      if (struct.robot != null) {
        oprot.writeFieldBegin(ROBOT_FIELD_DESC);
        struct.robot.write(oprot);
        oprot.writeFieldEnd();
      }
      if (struct.user != null) {
        oprot.writeFieldBegin(USER_FIELD_DESC);
        oprot.writeString(struct.user);
        oprot.writeFieldEnd();
      }
      if (struct.robots != null) {
        oprot.writeFieldBegin(ROBOTS_FIELD_DESC);
        {
          oprot.writeListBegin(new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, struct.robots.size()));
          for (RobotInfo _iter3 : struct.robots)
          {
            _iter3.write(oprot);
          }
          oprot.writeListEnd();
        }
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class MessageTupleSchemeFactory implements SchemeFactory {
    public MessageTupleScheme getScheme() {
      return new MessageTupleScheme();
    }
  }

  private static class MessageTupleScheme extends TupleScheme<Message> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, Message struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetFrom()) {
        optionals.set(0);
      }
      if (struct.isSetType()) {
        optionals.set(1);
      }
      if (struct.isSetRobot()) {
        optionals.set(2);
      }
      if (struct.isSetUser()) {
        optionals.set(3);
      }
      if (struct.isSetRobots()) {
        optionals.set(4);
      }
      oprot.writeBitSet(optionals, 5);
      if (struct.isSetFrom()) {
        oprot.writeString(struct.from);
      }
      if (struct.isSetType()) {
        oprot.writeString(struct.type);
      }
      if (struct.isSetRobot()) {
        struct.robot.write(oprot);
      }
      if (struct.isSetUser()) {
        oprot.writeString(struct.user);
      }
      if (struct.isSetRobots()) {
        {
          oprot.writeI32(struct.robots.size());
          for (RobotInfo _iter4 : struct.robots)
          {
            _iter4.write(oprot);
          }
        }
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, Message struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(5);
      if (incoming.get(0)) {
        struct.from = iprot.readString();
        struct.setFromIsSet(true);
      }
      if (incoming.get(1)) {
        struct.type = iprot.readString();
        struct.setTypeIsSet(true);
      }
      if (incoming.get(2)) {
        struct.robot = new RobotInfo();
        struct.robot.read(iprot);
        struct.setRobotIsSet(true);
      }
      if (incoming.get(3)) {
        struct.user = iprot.readString();
        struct.setUserIsSet(true);
      }
      if (incoming.get(4)) {
        {
          org.apache.thrift.protocol.TList _list5 = new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, iprot.readI32());
          struct.robots = new ArrayList<RobotInfo>(_list5.size);
          RobotInfo _elem6;
          for (int _i7 = 0; _i7 < _list5.size; ++_i7)
          {
            _elem6 = new RobotInfo();
            _elem6.read(iprot);
            struct.robots.add(_elem6);
          }
        }
        struct.setRobotsIsSet(true);
      }
    }
  }

}
