package com.demo.auction.product;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.demo.auction.enumtype.ProductStatusEnum;
import com.demo.auction.jwt.JwtTokenUtils;
import com.demo.auction.securityutils.TokenAuthFilter;
import com.demo.auction.user.User;
import com.demo.auction.user.UserDao;

@Service
public class ProductService implements IProductService {

	@Autowired
	private ProductDao productDao;
	@Autowired
	private UserDao userDao;

	@Override
	@Transactional
	public Product addUpdateProduct(Product product) {
		
		if(product.getId() == null){
			product.setStatus(ProductStatusEnum.ACTIVE.getType());
			product.setStartAmount((double)0);
			product.setCreatedBy(JwtTokenUtils.getUser().getUserId());
			product.setCreatedOn(new Date());
			product.setUpdatedBy(JwtTokenUtils.getUser().getUserId());
			product.setUpdatedOn(new Date());
			if(product.getUser()==null){
				product.setUser(JwtTokenUtils.getUser());
			}
			
		}else{
			product.setUpdatedBy(JwtTokenUtils.getUser().getUserId());
			product.setUpdatedOn(new Date());
		}
		return productDao.save(product);
	}

	@Override
	@Transactional
	public List<Product> findProductByUserId(Long userId) {
		Optional<User> userOptional = userDao.findById(userId);
		User user = null;
		if (userOptional.isPresent()) {
			user = userOptional.get();
		}
		return productDao.findByUser(user);
	}

	@Override
	public Product retrieveProductById(Long productId) {
		Optional<Product> productOptional = productDao.findById(productId);
		Product product = null;
		if (productOptional.isPresent()) {
			product = productOptional.get();
		}
		return product;
	}

	@Override
	public List<Product> retrieveProductByPage(Long userId, Integer page, Integer quantity) {
		Pageable pageable = PageRequest.of(page, quantity);
		return productDao.findAll(pageable).getContent();

	}

}
