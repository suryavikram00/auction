package com.demo.auction.productbid;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.auction.product.Product;
import com.demo.auction.product.ProductDao;
import com.demo.auction.user.User;
import com.demo.auction.user.UserDao;

@Service
public class ProductBidService implements IProductBidService{
	
	@Autowired
	private ProductBidDao productBidDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private ProductDao productDao;

	@Override
	@Transactional
	public ProductBid addProductBid(ProductBid productBid) {
		
		
		Optional<Product> productOptional = productDao.findById(productBid.getProduct().getId());
		Product product = null;
		if (productOptional.isPresent()) {
			product = productOptional.get();
			if (product.getStartAmount() >= productBid.getAmount()) {
				throw new RuntimeException("Bid Amount should be greater than the Product Bid Amount which is Rs "+product.getStartAmount());
			}
		} else{
			throw new RuntimeException("Product Id is incorrect!");
		}		
		setMaxBidFalseForLastMaxProductBid(productBid);
		inactivePreviousProductBid(productBid.getUser());			
		return saveProductBid(productBid);
	}

	private ProductBid saveProductBid(ProductBid productBid) {
		productBid.setBidNo(Long. toString(System.currentTimeMillis()));
		productBid.setActive(Boolean.TRUE);
		productBid.setBiddedOn(new Date());
		productBid.setMaximumBid(Boolean.TRUE);	
		productBidDao.save(productBid);
		return productBid;
		
	}

	private void inactivePreviousProductBid(User user) {
		List<ProductBid> productBid = productBidDao.findByUser(user);
		for(ProductBid eachProductBid : productBid){
			eachProductBid.setUpdatedOn(new Date());
			eachProductBid.setActive(Boolean.FALSE);
			productBidDao.save(eachProductBid);
		}			
	}

	private void setMaxBidFalseForLastMaxProductBid(ProductBid productBid) {
		ProductBid lastMaxProductBid = productBidDao.findTopByProductOrderByAmountDesc(productBid.getProduct());
		//if first bid, this will be null
		if(lastMaxProductBid != null){
		if(lastMaxProductBid.getAmount() >= productBid.getAmount()){
			throw new RuntimeException("Bid Amount should be greater than Current Bid Amount which is Rs "+lastMaxProductBid.getAmount());
		}
		lastMaxProductBid.setMaximumBid(Boolean.FALSE);
		productBidDao.save(lastMaxProductBid);
		}
		
	}

	@Override
	@Transactional
	public List<ProductBid> findProductBidByUserId(Long userId) {
		Optional<User> userOptional = userDao.findById(userId);
		User user = null;
		if(userOptional.isPresent()){
			user = userOptional.get();
		}	
		return productBidDao.findByUser(user);
	}
	
	@Override
	@Transactional
	public List<ProductBid> findWonProductBidByUserId(Long userId) {
		return productBidDao.findWonProductBidByUserId(userId);
	}

}
