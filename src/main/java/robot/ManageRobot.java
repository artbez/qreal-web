package robot;

import org.hibernate.Query;
import org.hibernate.Session;
import persistence.HibernateUtil;

import java.util.List;


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

    public void delete(Robot robot) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        //session.delete(robot);
        session.beginTransaction();
        Query q = session.createQuery("delete Robot where id = :robotId");
        q.setParameter("robotId", robot.id);
        int result = q.executeUpdate();
        session.getTransaction().commit();
        session.close();
    }

    public Robot findByName(String robotName) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        List<Robot> robots = session.createQuery("from Robot where name=?").setParameter(0, robotName).list();
        session.close();
        return (robots.size() > 0) ? robots.get(0) : null;
    }

    public List<Robot> getAllRobots() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        List<Robot> robots = session.createCriteria(Robot.class).list();
        session.close();
        return robots;
    }
}
