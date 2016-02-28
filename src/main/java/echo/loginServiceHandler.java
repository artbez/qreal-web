package echo;

import org.apache.thrift.TException;

public class loginServiceHandler implements loginService.Iface {

	@Override
	public boolean login(User user) throws TException {
		System.out.print("ckeck");
		return false;
	}

	@Override
	public void addUser(User user) throws TException {
		System.out.println(user.getLogin() + " " + user.getPassword() + " was added");
	}

	@Override
	public void deleteUser(String userName) throws TException {
		System.out.println(userName + " was deleted");
	}
}