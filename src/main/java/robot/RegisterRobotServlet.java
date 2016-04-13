package robot;

import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;

/**
 * Created by artemiibezguzikov on 13.04.16.
 */

public class RegisterRobotServlet extends TServlet {
    public RegisterRobotServlet() {
        super(
                new RegisterRobotService.Processor(
                        new RegisterRobotServiceHandler()),
                new TJSONProtocol.Factory()
        );
    }


}
