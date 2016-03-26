package diagram;

import org.hibernate.Session;
import persistence.HibernateUtil;

import java.util.Iterator;

/**
 * Created by artemiibezguzikov on 26.03.16.
 */
public class ManageDiagram {
    void saveDiagram(DiagramDAO dia) {
        if (dia == null)
            return;

        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();

        Iterator<DefaultDiagramNodeDAO> itr = dia.nodes.iterator();
        while(itr.hasNext()) {
            DefaultDiagramNodeDAO mddn = itr.next();
            Iterator<PropertyDAO> pItr = mddn.properties.iterator();
            while(pItr.hasNext()) {
                session.save(pItr.next());
            }
            session.save(mddn);
        }

        Iterator<LinkDAO> itrL = dia.links.iterator();
        while (itrL.hasNext()) {
            LinkDAO linkd = itrL.next();
            Iterator<PropertyDAO> itrP = linkd.properties.iterator();
            while (itrP.hasNext()) {
                session.save(itrP.next());
            }
            session.save(linkd);
        }
        session.save(dia);
        session.getTransaction().commit();;

        session.close();

    }

}
