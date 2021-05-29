package com.demo.auction.product;

import java.io.Serializable;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Where;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;

import com.demo.auction.image.ImageMetaData;
import com.demo.auction.productbid.ProductBid;
import com.demo.auction.productbid.ProductBidDao;
import com.demo.auction.user.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "PRODUCT")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Product implements Serializable {

	private static final long serialVersionUID = 2L;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	@NotNull
	private String name;
	@Column
	private String description;
	@Column
	@NotNull
	private Double minimumAmount;
	@Column
	@NotNull
	private Double startAmount;

	@Column
	private Integer type;
	@Column
	@NotNull
	private Integer Status;
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date expiryTime;
	@Column
	@NotNull
	private Date createdOn;
	@Column
	private Long createdBy;
	@Column
	@NotNull
	private Date updatedOn;
	@Column
	private Long updatedBy;
	@ManyToOne(cascade = { CascadeType.REFRESH })
	@JoinColumn(name = "userId", referencedColumnName = "userId")
	private User user;
	@OneToMany(mappedBy = "product")
//	@OrderBy("biddedOn DESC")
	@Where(clause = "isActive IN (1)")
	private List<ProductBid> productBid = new LinkedList<>();
	@OneToMany(mappedBy = "product")
	@OrderBy("uploadedOn DESC")
	@Where(clause = "isActive IN (1)")
	private List<ImageMetaData> imageMetaData = new LinkedList<>();

	public Double getStartAmount() {
		return startAmount;
	}

	public void setStartAmount(Double startAmount) {
		this.startAmount = startAmount;
	}

	@Transient
	private Double maximumBidAmount;

	public void setMaximumBidAmount(Double maximumBidAmount) {
		this.maximumBidAmount = maximumBidAmount;
	}

	public Double getMaximumBidAmount() {
		return maximumBidAmount;
	}

	@JsonIgnore
	public Double getMaximumBid() {
		// if the bid is not made for this product
		if (this.getProductBid().size() == 0) {
			return this.getStartAmount();
		} else {
			List<ProductBid> maxProductBid = this.getProductBid().stream()
					.filter(productBid -> productBid.getMaximumBid() == Boolean.TRUE).collect(Collectors.toList());
			if (maxProductBid.size() == 0) {
				return this.getStartAmount();
			} else {
				return maxProductBid.get(0).getAmount();
			}

		}
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<ProductBid> getProductBid() {
		return productBid;
	}

	public void setProductBid(List<ProductBid> productBid) {
		this.productBid = productBid;
	}

	public void addProductBid(ProductBid productBid) {
		if (this.productBid == null) {
			this.productBid = new LinkedList<ProductBid>();
		}
		productBid.setProduct(this);
		this.productBid.add(productBid);
	}

	public List<ImageMetaData> getImageMetaData() {
		return imageMetaData;
	}

	public void setImageMetaData(List<ImageMetaData> imageMetaData) {
		this.imageMetaData = imageMetaData;
	}

	public void addImageMetaData(ImageMetaData imageMetaData) {
		if (this.imageMetaData == null) {
			this.imageMetaData = new LinkedList<ImageMetaData>();
		}
		imageMetaData.setProduct(this);
		this.imageMetaData.add(imageMetaData);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getMinimumAmount() {
		return minimumAmount;
	}

	public void setMinimumAmount(Double minimumAmount) {
		this.minimumAmount = minimumAmount;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Integer getStatus() {
		return Status;
	}

	public void setStatus(Integer status) {
		Status = status;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public Long getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(Long updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getExpiryTime() {
		return expiryTime;
	}

	public void setExpiryTime(Date expiryTime) {
		this.expiryTime = expiryTime;
	}

}
