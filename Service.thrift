namespace java art.regservlet.qrealweb

struct User {
    1: string login,
    2: string password
}

service loginService {
	bool login(1:User user),
	void addUser(1:User user),
	void deleteUser(1:string userName)
}
