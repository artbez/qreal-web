package robot;

import org.apache.thrift.TException;
import robot.thriftgen.Robot;
import robot.thriftgen.RobotInfo;
import robot.thriftgen.RobotWrapper;
import robot.thriftgen.robotWrapperService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by artemiibezguzikov on 18.04.16.
 */
public class robotWrapperServiceHandler implements robotWrapperService.Iface {
    @Override
    public List<RobotWrapper> getFullRobotInfo() throws TException {
        ManageRobot mr = new ManageRobot();
        List<Robot> robots = mr.getAllRobots();
        List<RobotWrapper> robotsWrapper = new ArrayList<RobotWrapper>();
        for (Robot robot : robots) {
            String owner = "test";
            robotsWrapper.add(new RobotWrapper(robot,
                    new RobotInfo(owner, robot.getName(), robot.getSsid()), "Online"));
        }
        return robotsWrapper;
    }
}
