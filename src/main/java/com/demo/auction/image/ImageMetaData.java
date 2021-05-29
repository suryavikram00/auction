package com.demo.auction.image;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.demo.auction.product.Product;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "IMAGEMETADATA")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class ImageMetaData implements Serializable{

	private static final long serialVersionUID = 2L;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String filePath;
	@ManyToOne
	@JoinColumn(name = "productId" , referencedColumnName = "id")
	private Product product;
	@Column
	private Date uploadedOn;
	@Column
	private Integer uploadedBy;
	@Column(name = "isActive")
	private Boolean active;
	@Column
	private Date updatedOn;
	@Column
	private Integer updatedBy;
	@Column(name = "isThumbNail")
	private Boolean thumbNail;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFilePath() {
		return filePath;
	}
	public Boolean getThumbNail() {
		return thumbNail;
	}
	public void setThumbNail(Boolean thumbNail) {
		this.thumbNail = thumbNail;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Date getUploadedOn() {
		return uploadedOn;
	}
	public void setUploadedOn(Date uploadedOn) {
		this.uploadedOn = uploadedOn;
	}
	public Integer getUploadedBy() {
		return uploadedBy;
	}
	public void setUploadedBy(Integer uploadedBy) {
		this.uploadedBy = uploadedBy;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
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

}
