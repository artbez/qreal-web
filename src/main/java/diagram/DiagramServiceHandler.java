package diagram;

import org.apache.thrift.TException;

/**
 * Created by artemiibezguzikov on 19.03.16.
 */
public class DiagramServiceHandler implements DiagramService.Iface {

    DiagramDAO last;

    @Override
    public boolean save(DiagramDAO dia) throws TException {
        ManageDiagram manager = new ManageDiagram();
        manager.saveDiagram(dia);
        last = new DiagramDAO(dia);
        return false;
    }

    @Override
    public DiagramDAO open(String name) throws TException {
        return last != null ? last : new DiagramDAO();
    }
}
