package com.demo.auction.address;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.auction.image.ImageMetaData;
import com.demo.auction.user.User;
import com.demo.auction.user.UserDao;

@Service
public class AddressService implements IAddressService{
	
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private UserDao userDao;
	
	@Override
	@Transactional
	public Address addUpdateAddress(Address address) {			
		if(address.getPrimary() == Boolean.TRUE){
			Optional<User> userOptional = userDao.findById(address.getUser().getUserId());
			User user = null;
			if (userOptional.isPresent()) {
				user = userOptional.get();
			}
			for (Address addressTemp : user.getAddress()) {
				addressTemp.setPrimary(Boolean.FALSE);
				addressDao.save(addressTemp);
			}
		}		
		return addressDao.save(address);
	}
	
	

}
