package robot;

import robot.thriftgen.RegisterRobotService;
import robot.thriftgen.Robot;
import user.thriftgen.User;
import org.apache.thrift.TException;

/**
 * Created by artemiibezguzikov on 13.04.16.
 */
public class RegisterRobotServiceHandler implements RegisterRobotService.Iface {
    @Override
    public boolean registerRobot(String robotName, String ssid) throws TException {
        ManageRobot mr = new ManageRobot();
        Robot robot = new Robot();
        robot.name = robotName;
        robot.ssid = ssid;
        User test = new User();
        test.login = "123";
        test.password = "123";
        robot.owner = test;
        mr.save(robot);
        return true;
    }

    @Override
    public boolean deleteRobot(String robotName) throws TException {
        ManageRobot mr = new ManageRobot();
        Robot robot = mr.findByName(robotName);
        mr.delete(robot);
        return true;
    }
}
