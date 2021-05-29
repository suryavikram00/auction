package com.demo.auction.productbid;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.demo.auction.product.Product;
import com.demo.auction.user.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "PRODUCT_BID")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class ProductBid implements Serializable{

	private static final long serialVersionUID = 2L;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String bidNo;
	@Column
	private Double amount;
	@ManyToOne
	@JoinColumn(name = "userId", referencedColumnName= "userId")
	private User user;
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date biddedOn;
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedOn;
	@Column
	private  Integer updatedBy;
	@Column(name = "isActive")
	private Boolean active;
	@Column(name = "isMaximumBid")
	private Boolean maximumBid;
	@ManyToOne
	@JoinColumn(name = "productId", referencedColumnName = "id")
	private Product product;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBidNo() {
		return bidNo;
	}
	public void setBidNo(String bidNo) {
		this.bidNo = bidNo;
	}
	public Date getBiddedOn() {
		return biddedOn;
	}
	public void setBiddedOn(Date biddedOn) {
		this.biddedOn = biddedOn;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	public Integer getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(Integer updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Boolean getMaximumBid() {
		return maximumBid;
	}
	public void setMaximumBid(Boolean maximumBid) {
		this.maximumBid = maximumBid;
	}
	
}
