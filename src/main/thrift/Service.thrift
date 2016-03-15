namespace java echo

struct User {
    1: string login,
    2: string password,
    3: i32 id
}

service loginService {
	bool login(1:User user),
	void addUser(1:User user),
	void deleteUser(1:string userName)
}
