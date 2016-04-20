package sysconfigs;

import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;

/**
 * Created by artemiibezguzikov on 20.04.16.
 */
public class ConfigServlet extends TServlet {
    public ConfigServlet() {
        super(
                new ConfigService.Processor(
                        new ConfigServiceHandler()),
                new TJSONProtocol.Factory()
        );
    }
}
