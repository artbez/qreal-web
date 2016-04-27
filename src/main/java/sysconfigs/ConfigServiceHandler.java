package sysconfigs;

import org.apache.thrift.TException;
import sysconfigs.thriftgen.*;

import java.util.ArrayList;

/**
 * Created by artemiibezguzikov on 20.04.16.
 */
public class ConfigServiceHandler implements ConfigService.Iface {
    @Override
    public SystemConfig getSystemConfigObject(String systemConfig) throws TException {
        SystemConfig sc = new SystemConfig();
        sc.devices = new ArrayList<Device>();
        sc.ports = new ArrayList<Port>();
        return new SystemConfig();
        //return new SystemConfigParser().parse(systemConfig);
    }

    @Override
    public ModelConfig getModelConfigObject(String modelConfig) throws TException {
        return new ModelConfig();//ModelConfigParser().parse(modelConfig);
    }
}
