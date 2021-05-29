package com.demo.auction.productbid;

import java.util.List;

import com.demo.auction.product.Product;

public interface IProductBidService {

	public ProductBid addProductBid(ProductBid productBid);
	
	public List<ProductBid> findProductBidByUserId(Long userId);
	
	public List<ProductBid> findWonProductBidByUserId(Long userId);

}
