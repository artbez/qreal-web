package echo;

import org.apache.thrift.TException;

public class loginServiceHandler implements loginService.Iface {

	@Override
	public boolean login(User user) throws TException {
		ManageUser mu = new ManageUser();
		User nUser = new User();
		nUser.setLogin("123");
		nUser.setPassword("123");
		boolean result = false;
		mu.contains(nUser);
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