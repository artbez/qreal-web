namespace java com.mycompany.app

service AdditionService {
	void ping();
	i32 sum(1:i32 a, 2:i32 b);
	i32 sub(1:i32 a, 2:i32 b);
}

service MultiplicationService {
	void ping();
	i32 mul(1:i32 a, 2:i32 b);
	i32 div(1:i32 a, 2:i32 b);
}
