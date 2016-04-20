package sysconfigs;

import groovy.ModelConfigParser;
import groovy.SystemConfigParser;
import org.apache.thrift.TException;

/**
 * Created by artemiibezguzikov on 20.04.16.
 */
public class ConfigServiceHandler implements ConfigService.Iface {
    @Override
    public SystemConfig getSystemConfigObject(String systemConfig) throws TException {
        return new SystemConfigParser().parse(systemConfig);
      //  return null;
    }

    @Override
    public ModelConfig getModelConfigObject(String modelConfig) throws TException {
        return new ModelConfigParser().parse(modelConfig);
    }
}
