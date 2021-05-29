package com.demo.auction.product;

import java.util.List;

public interface IProductService {
	
	public Product addUpdateProduct(Product product);
	
	public List<Product> findProductByUserId(Long userId);
	
	public Product retrieveProductById(Long productId);

	public List<Product> retrieveProductByPage(Long userId,Integer page, Integer quantity);
	
}
