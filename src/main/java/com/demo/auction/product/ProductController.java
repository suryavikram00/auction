package com.demo.auction.product;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.auction.image.ImageMetaData;
import com.demo.auction.productbid.ProductBid;
import com.demo.auction.user.User;
import com.demo.auction.utils.JsonResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	private IProductService productService;
	
	@PostMapping(value = "/add-update-product")
	@ResponseBody
	public JsonResponse<Object> addUpdateProduct(@RequestBody Product product, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse){
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		product = productService.addUpdateProduct(product);
		jsonResponse.setResult(product);
		return jsonResponse;
	}
	
	@GetMapping(value = "/retrieve-product/user/{userid}")
	@ResponseBody
	public JsonResponse<Object> retrieveProductByUser(@PathVariable(name = "userid") Long userId,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		List<Product> product = productService.findProductByUserId(userId);
		for(Product tempProduct : product){
			tempProduct.setProductBid(null);
			tempProduct.setUser(null);
		}
		jsonResponse.setResult(product);
		return jsonResponse;
	}
	
	@GetMapping(value = "/retrieve-product/{productid}")
	@ResponseBody
	public JsonResponse<Object> retrieveProductById(@PathVariable(name = "productid") Long productid,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		Product product = productService.retrieveProductById(productid);
		product.setUser(null);
		for(ProductBid tempProductBid : product.getProductBid()){
			tempProductBid.setUser(null);
			tempProductBid.getProduct().setUser(null);			
		}
		jsonResponse.setResult(product);
		return jsonResponse;
	}
	
	@GetMapping(value = "/retrieve-product/user/{userId}/page/{page}/quantity/{quantity}")
	@ResponseBody
	public JsonResponse<Object> retrieveProductByPage(@PathVariable(name = "userId") Long userId,
			@PathVariable(name = "page") Integer page,
			@PathVariable(name = "quantity") Integer quantity,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		List<Product> product = productService.retrieveProductByPage(userId,page, quantity);
		for(Product tempProduct : product){
			tempProduct.setMaximumBidAmount(tempProduct.getMaximumBid());
			tempProduct.setUser(null);
			tempProduct.setProductBid(null);
			for(ImageMetaData imageMetaData : new LinkedList<>(tempProduct.getImageMetaData()) ){
				if(imageMetaData.getThumbNail() == false){
					tempProduct.getImageMetaData().remove(imageMetaData);
				}
			}
		}
		jsonResponse.setResult(product);
		return jsonResponse;
	}
	
}
