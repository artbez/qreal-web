package user;

import org.apache.thrift.TException;
import user.thriftgen.User;
import user.thriftgen.loginService;

public class loginServiceHandler implements loginService.Iface {

	@Override
	public boolean login(User user) throws TException {
		ManageUser mu = new ManageUser();
		boolean result = false;
		result = mu.contains(user);
		return result;
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