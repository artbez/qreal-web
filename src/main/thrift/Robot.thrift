namespace java robot

include "UserService.thrift"

struct Robot {
    1 : i32 id,
    2 : string name,
    3 : string ssid,
    4 : UserService.User owner
}

struct RobotInfo {
    1 : string owner,
    2 : string name,
    3 : string ssid,
    4 : string modelConfig,
    5 : string systemConfig,
    6 : string program
}

struct RobotWrapper {
    1 : Robot robot,
    2 : RobotInfo robotInfo,
    3 : string status,
}

struct Message {
    1 : string from,
    2 : string type,
    3 : RobotInfo robot,
    4 : string user,
    5 : list<RobotInfo> robots
}

struct Coordinates {
    1 : string latitude,
    2 : string longitude,
}

service HashCodeService {
    i32 hashCode(1: Coordinates coord)
}