namespace java robot

include "Robot.thrift"

service RobotWrapperService {
    list<Robot.RobotWrapper> getFullRobotInfo();
}