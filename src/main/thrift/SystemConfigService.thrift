namespace java sysconfigs

struct DeviceType {
    1: string name,
    2: map<string, string> properties
}

struct Device {
    1: string name,
    2: map<string, string> properties,
    3: list<string> availablePorts,
    4: list<DeviceType> types
}

struct Port {
    1: list<Device> devices,
    2: string name
}

struct SystemConfig {
    1: list<Device> devices,
    2: list<Port> ports
}

struct ModelConfig {
    1: map<string, string> devicePorts,
    2: map<string, map<string, string>> typeProperties
}

service ConfigService {
    SystemConfig getSystemConfigObject(1:string systemConfig);
    ModelConfig getModelConfigObject(1:string modelConfig);
}