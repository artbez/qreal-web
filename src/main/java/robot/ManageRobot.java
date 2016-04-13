package robot;

import org.hibernate.Session;
import persistence.HibernateUtil;


/**
 * Created by artemiibezguzikov on 13.04.16.
 */
public class ManageRobot {
    void save(Robot robot) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        session.save(robot);
        session.getTransaction().commit();
        session.close();
    }

    void delete(Robot robot) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(robot);
        session.getTransaction().commit();
        session.close();
    }
}
