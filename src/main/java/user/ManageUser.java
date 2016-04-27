package user;

import org.hibernate.Session;
import persistence.HibernateUtil;
import user.thriftgen.User;

import java.util.Iterator;
import java.util.List;

/**
 * Created by artemiibezguzikov on 29.02.16.
 */
public class ManageUser {
    boolean contains(User user) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        boolean result = false;
        List usersl = session.createQuery("FROM User ").list();
        for (Iterator iterator = usersl.iterator(); iterator.hasNext(); ) {
            User muser = (User) iterator.next();
            if ((muser.getLogin().equals(user.getLogin()))
                    && (muser.getPassword().equals(user.getPassword()))) {
                result = true;
            }
        }
        session.getTransaction().commit();
        session.close();
        return result;
    }
}
