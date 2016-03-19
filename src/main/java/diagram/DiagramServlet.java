package diagram;

/**
 * Created by artemiibezguzikov on 20.03.16.
 */
import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.server.TServlet;

/**
 * Created by artemiibezguzikov on 24.02.16.
 */
public class DiagramServlet extends TServlet {
    public DiagramServlet() {
        super(
                new DiagramService.Processor(
                        new DiagramServiceHandler()),
                new TJSONProtocol.Factory()
        );
    }


}
