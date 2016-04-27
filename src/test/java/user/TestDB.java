package user;

import persistence.HibernateUtil;
import org.hibernate.Session;
import user.thriftgen.User;

/**
 * Created by artemiibezguzikov on 29.02.16.
 */

public class TestDB {

    public static void main(String[] args) {
        System.out.println("Maven + Hibernate + MySQL");
        Session session = HibernateUtil.getSessionFactory().openSession();

        session.beginTransaction();
        User user = new User();

        user.setLogin("Alr");
        user.setPassword("Bark");

        session.save(user);
        session.getTransaction().commit();
        session.close();
    }
}