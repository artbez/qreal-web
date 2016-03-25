namespace java diagram

struct PropertyDAO {
    1 : i64 propertyId,
    2 : string name,
    3 : string value,
    4 : string type,
    5 : i32 position
}

struct DefaultDiagramNodeDAO {
    1 : i64 nodeId,
    2 : string jointObject,
    3 : string type,
    4 : double x,
    5 : double y,
    6 : set<PropertyDAO> properties
}

struct LinkVertexDAO {
    1 : i64 vertexId,
    2 : double x,
    3 : double y,
    4 : i32 number
}

struct LinkDAO {
    1 : i64 linkId,
    2 : string jointObjectId,
    3 : string source,
    4 : string target,
    5 : set<LinkVertexDAO> verices,
    6 : set<PropertyDAO> properties
}

struct DiagramDAO {
    1 : i64 diagramId,
    2 : string name,
    3 : string user,
    4 : set<DefaultDiagramNodeDAO> nodes,
    5 : set<LinkDAO> links
}

service DiagramService {
    bool save(1:DiagramDAO dia);
}