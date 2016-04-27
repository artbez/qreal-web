package user;

import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;
import user.thriftgen.loginService;

/**
 * Created by artemiibezguzikov on 24.02.16.
 */
public class LoginServlet extends TServlet {
    public LoginServlet() {
        super(
                new loginService.Processor(
                        new loginServiceHandler()),
                        new TJSONProtocol.Factory()
        );
    }


}