package com.demo.auction.productbid;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.annotations.Where;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.auction.product.Product;
import com.demo.auction.user.User;

@Repository
public interface ProductBidDao extends JpaRepository<ProductBid, Long>{
	
	
	public List<ProductBid> findByUser(User user);
	
	@Query("Select pd from PRODUCT_BID pd where isMaximumBid = 1 and userId = :userId")
	public  List<ProductBid> findWonProductBidByUserId(@Param("userId") Long userId);
	
	public List<ProductBid> findByProduct(Product product);
	
	@Where(clause = "isActive IN (1)")
	public ProductBid findTopByProductOrderByAmountDesc(Product product);

}