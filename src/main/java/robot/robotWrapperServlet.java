package robot;

import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;

/**
 * Created by artemiibezguzikov on 18.04.16.
 */
public class robotWrapperServlet extends TServlet {
        public robotWrapperServlet() {
            super(
                    new robotWrapperService.Processor(
                            new robotWrapperServiceHandler()),
                    new TJSONProtocol.Factory()
            );
        }


}
