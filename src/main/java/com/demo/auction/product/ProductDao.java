package com.demo.auction.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.auction.user.User;


@Repository
public interface ProductDao extends JpaRepository<Product, Long>{

	public List<Product> findByUser(User user); 
	
}
