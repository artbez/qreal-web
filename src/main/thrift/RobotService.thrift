namespace java robot

include "Robot.thrift"

service robotWrapperService {
    list<Robot.RobotWrapper> getFullRobotInfo();
}