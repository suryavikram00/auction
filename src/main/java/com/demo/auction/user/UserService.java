package com.demo.auction.user;

import java.util.Date;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.auction.image.ImageMetaData;
import com.demo.auction.jwt.JwtTokenUtils;

@Service
public class UserService implements IUserService {
	@Autowired
	private UserDao userDao;

	@Override
	@Transactional
	public User addUpdateUser(User user) {
		user.setUpdatedOn(new Date());
		if (user.getUserId() == null) {
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//			user.setPassword(user.getPassword());
			user.setCreatedOn(new Date());
			user.setUpdatedOn(new Date());
			user.setUdpatedBy(null);
			user.setActive(Boolean.TRUE);
		}
		return userDao.save(user);
	}

	public String login(User user) {
		User userFromDb = userDao.findByEmail(user.getEmail());
		String jwtToken = null;
		if (userFromDb == null) {
			throw new RuntimeException("Error! the user is not registerd, Kindly register! ");
		}
		if (new BCryptPasswordEncoder().matches(new String(user.getPassword()), userFromDb.getPassword())) {
//		if(user.getPassword().equals(userFromDb.getPassword())){
			jwtToken = JwtTokenUtils.createJWT(userFromDb);
		} else {
			throw new RuntimeException("Error! Password is Incorrect");
		}
		return jwtToken;
	}

}
