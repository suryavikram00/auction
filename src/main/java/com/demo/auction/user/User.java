package com.demo.auction.user;

import java.io.Serializable;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Where;

import com.demo.auction.address.Address;
import com.demo.auction.product.Product;
import com.demo.auction.productbid.ProductBid;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "USER")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "userId")
public class User implements Serializable {

	private static final long serialVersionUID = 2L;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	@Column
	@NotNull
	private String firstName;
	@Column
	private String lastName;
	@Column
	@NotNull
	private String phone;
	@Column
	@NotNull
	private String email;
	@Column
	@NotNull
	private String password;
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date createdOn;
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date updatedOn;
	@Column
	private Integer udpatedBy;
	@Column(name = "isActive")
	@NotNull
	private Boolean active;
	
	@OneToMany(mappedBy = "user", cascade = { CascadeType.MERGE })
	@OrderBy("createdOn DESC")
	private List<Product> product = new LinkedList<>();
	@OneToMany(mappedBy = "user")
//	@OrderBy("biddenOn DESC")
	@Where(clause = "isActive IN (1)")
	private List<ProductBid> productBidded = new LinkedList<>();
	@OneToMany(mappedBy = "user", cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<Address> address = new LinkedList<>();

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public void addAddress(Address address) {
		if (this.address == null) {
			this.address = new LinkedList<Address>();
		}
		address.setUser(this);
		this.address.add(address);
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public List<ProductBid> getProductBidded() {
		return productBidded;
	}

	public void setProductBidded(List<ProductBid> productBidded) {
		this.productBidded = productBidded;
	}

	public void addProductBidded(ProductBid productBidded) {
		if (this.productBidded == null) {
			this.productBidded = new LinkedList<ProductBid>();
		}
		productBidded.setUser(this);
		this.productBidded.add(productBidded);
	}

	public void addProduct(Product product) {
		if (this.product == null) {
			this.product = new LinkedList<Product>();
		}
		product.setUser(this);
		this.product.add(product);
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public Integer getUdpatedBy() {
		return udpatedBy;
	}

	public void setUdpatedBy(Integer udpatedBy) {
		this.udpatedBy = udpatedBy;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

}
