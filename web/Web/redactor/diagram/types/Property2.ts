class Property2 extends PropertyDAO{

    value: string;
    type: string;

    constructor(value: string, type: string) {
        super();
        this.value = value;
        this.type = type;
    }
}