package diagram;

import org.apache.thrift.TException;

/**
 * Created by artemiibezguzikov on 19.03.16.
 */
public class DiagramServiceHandler implements DiagramService.Iface {
    @Override
    public boolean save(DiagramDAO dia) throws TException {
        return false;
    }
}
