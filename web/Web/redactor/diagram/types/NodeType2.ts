class NodeType2 extends DefaultDiagramNodeDAO {
    image:string;
    properties:PropertiesMap2;
    constructor(image: string, properties: PropertiesMap2) {
        super();
        this.image = image;
        this.properties = properties;
    }
}