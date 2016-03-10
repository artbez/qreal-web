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
public class Coordinates implements org.apache.thrift.TBase<Coordinates, Coordinates._Fields>, java.io.Serializable, Cloneable, Comparable<Coordinates> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("Coordinates");

  private static final org.apache.thrift.protocol.TField LATITUDE_FIELD_DESC = new org.apache.thrift.protocol.TField("latitude", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField LONGITUDE_FIELD_DESC = new org.apache.thrift.protocol.TField("longitude", org.apache.thrift.protocol.TType.STRING, (short)2);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new CoordinatesStandardSchemeFactory());
    schemes.put(TupleScheme.class, new CoordinatesTupleSchemeFactory());
  }

  public String latitude; // required
  public String longitude; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    LATITUDE((short)1, "latitude"),
    LONGITUDE((short)2, "longitude");

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
        case 1: // LATITUDE
          return LATITUDE;
        case 2: // LONGITUDE
          return LONGITUDE;
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
    tmpMap.put(_Fields.LATITUDE, new org.apache.thrift.meta_data.FieldMetaData("latitude", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.LONGITUDE, new org.apache.thrift.meta_data.FieldMetaData("longitude", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(Coordinates.class, metaDataMap);
  }

  public Coordinates() {
  }

  public Coordinates(
    String latitude,
    String longitude)
  {
    this();
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public Coordinates(Coordinates other) {
    if (other.isSetLatitude()) {
      this.latitude = other.latitude;
    }
    if (other.isSetLongitude()) {
      this.longitude = other.longitude;
    }
  }

  public Coordinates deepCopy() {
    return new Coordinates(this);
  }

  @Override
  public void clear() {
    this.latitude = null;
    this.longitude = null;
  }

  public String getLatitude() {
    return this.latitude;
  }

  public Coordinates setLatitude(String latitude) {
    this.latitude = latitude;
    return this;
  }

  public void unsetLatitude() {
    this.latitude = null;
  }

  /** Returns true if field latitude is set (has been assigned a value) and false otherwise */
  public boolean isSetLatitude() {
    return this.latitude != null;
  }

  public void setLatitudeIsSet(boolean value) {
    if (!value) {
      this.latitude = null;
    }
  }

  public String getLongitude() {
    return this.longitude;
  }

  public Coordinates setLongitude(String longitude) {
    this.longitude = longitude;
    return this;
  }

  public void unsetLongitude() {
    this.longitude = null;
  }

  /** Returns true if field longitude is set (has been assigned a value) and false otherwise */
  public boolean isSetLongitude() {
    return this.longitude != null;
  }

  public void setLongitudeIsSet(boolean value) {
    if (!value) {
      this.longitude = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case LATITUDE:
      if (value == null) {
        unsetLatitude();
      } else {
        setLatitude((String)value);
      }
      break;

    case LONGITUDE:
      if (value == null) {
        unsetLongitude();
      } else {
        setLongitude((String)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case LATITUDE:
      return getLatitude();

    case LONGITUDE:
      return getLongitude();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case LATITUDE:
      return isSetLatitude();
    case LONGITUDE:
      return isSetLongitude();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof Coordinates)
      return this.equals((Coordinates)that);
    return false;
  }

  public boolean equals(Coordinates that) {
    if (that == null)
      return false;

    boolean this_present_latitude = true && this.isSetLatitude();
    boolean that_present_latitude = true && that.isSetLatitude();
    if (this_present_latitude || that_present_latitude) {
      if (!(this_present_latitude && that_present_latitude))
        return false;
      if (!this.latitude.equals(that.latitude))
        return false;
    }

    boolean this_present_longitude = true && this.isSetLongitude();
    boolean that_present_longitude = true && that.isSetLongitude();
    if (this_present_longitude || that_present_longitude) {
      if (!(this_present_longitude && that_present_longitude))
        return false;
      if (!this.longitude.equals(that.longitude))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_latitude = true && (isSetLatitude());
    list.add(present_latitude);
    if (present_latitude)
      list.add(latitude);

    boolean present_longitude = true && (isSetLongitude());
    list.add(present_longitude);
    if (present_longitude)
      list.add(longitude);

    return list.hashCode();
  }

  @Override
  public int compareTo(Coordinates other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetLatitude()).compareTo(other.isSetLatitude());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetLatitude()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.latitude, other.latitude);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetLongitude()).compareTo(other.isSetLongitude());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetLongitude()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.longitude, other.longitude);
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
    StringBuilder sb = new StringBuilder("Coordinates(");
    boolean first = true;

    sb.append("latitude:");
    if (this.latitude == null) {
      sb.append("null");
    } else {
      sb.append(this.latitude);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("longitude:");
    if (this.longitude == null) {
      sb.append("null");
    } else {
      sb.append(this.longitude);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
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

  private static class CoordinatesStandardSchemeFactory implements SchemeFactory {
    public CoordinatesStandardScheme getScheme() {
      return new CoordinatesStandardScheme();
    }
  }

  private static class CoordinatesStandardScheme extends StandardScheme<Coordinates> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, Coordinates struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // LATITUDE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.latitude = iprot.readString();
              struct.setLatitudeIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // LONGITUDE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.longitude = iprot.readString();
              struct.setLongitudeIsSet(true);
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

    public void write(org.apache.thrift.protocol.TProtocol oprot, Coordinates struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.latitude != null) {
        oprot.writeFieldBegin(LATITUDE_FIELD_DESC);
        oprot.writeString(struct.latitude);
        oprot.writeFieldEnd();
      }
      if (struct.longitude != null) {
        oprot.writeFieldBegin(LONGITUDE_FIELD_DESC);
        oprot.writeString(struct.longitude);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class CoordinatesTupleSchemeFactory implements SchemeFactory {
    public CoordinatesTupleScheme getScheme() {
      return new CoordinatesTupleScheme();
    }
  }

  private static class CoordinatesTupleScheme extends TupleScheme<Coordinates> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, Coordinates struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetLatitude()) {
        optionals.set(0);
      }
      if (struct.isSetLongitude()) {
        optionals.set(1);
      }
      oprot.writeBitSet(optionals, 2);
      if (struct.isSetLatitude()) {
        oprot.writeString(struct.latitude);
      }
      if (struct.isSetLongitude()) {
        oprot.writeString(struct.longitude);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, Coordinates struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(2);
      if (incoming.get(0)) {
        struct.latitude = iprot.readString();
        struct.setLatitudeIsSet(true);
      }
      if (incoming.get(1)) {
        struct.longitude = iprot.readString();
        struct.setLongitudeIsSet(true);
      }
    }
  }

}
