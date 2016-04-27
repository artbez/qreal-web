package diagram;

import diagram.thriftgen.*;
import org.hibernate.Query;
import org.hibernate.Session;
import persistence.HibernateUtil;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

/**
 * Created by artemiibezguzikov on 25.03.16.
 */
public class TestDBDia {

    static void saveTest() {

        PropertyDAO prop = new PropertyDAO();
        prop.name = "name";
        prop.value = "value";
        prop.type = "type";
        prop.position = 0;

        DefaultDiagramNodeDAO defDia = new DefaultDiagramNodeDAO();
        defDia.jointObject = "obj1";
        defDia.type = "type";
        defDia.x = 0.1;
        defDia.y = 0.1;
        defDia.properties = new HashSet<PropertyDAO>();
        defDia.properties.add(prop);

        LinkVertexDAO lv = new LinkVertexDAO();
        lv.x = 1;
        lv.y = 2;
        lv.number = 1;

        LinkDAO link = new LinkDAO();
        link.jointObjectId = "obj2";
        link.source = "1";
        link.target = "2";
        link.verices = new HashSet<LinkVertexDAO>();
        link.verices.add(lv);
        link.properties = new HashSet<PropertyDAO>();
        link.properties.add(prop);

        DiagramDAO dia = new DiagramDAO();
        dia.name = "dia";
        dia.user = "test";
        dia.nodes = new HashSet<DefaultDiagramNodeDAO>();
        dia.nodes.add(defDia);
        dia.links = new HashSet<LinkDAO>();
        dia.links.add(link);


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

    static void openTest(String diaName) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        Query hql = session.createQuery("FROM DiagramDAO WHERE name = :diaName");
        hql.setParameter("diaName", diaName);
        List list = hql.list();
        for (Iterator iterator = list.iterator(); iterator.hasNext(); )
        {
            DiagramDAO dia = (DiagramDAO) iterator.next();
            System.out.println(dia.toString());
        }

        session.getTransaction().commit();
        session.close();

    }

    public static void main(String[] args) {
        openTest("dia");
    }
}
