package com.demo.auction.productbid;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.auction.product.IProductService;
import com.demo.auction.product.Product;
import com.demo.auction.product.ProductService;
import com.demo.auction.utils.JsonResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductBidController {

	@Autowired
	private IProductBidService productBidService;
	@Autowired
	private IProductService productService;

	@PostMapping(value = "/add-productbid")
	@ResponseBody
	public JsonResponse<Object> addProductBid(@RequestBody ProductBid productBid, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			productBid = productBidService.addProductBid(productBid);
			jsonResponse.setResult(productBid);
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setMessage("Successfully Placed a bid!");
		} catch (RuntimeException e) {
			e.printStackTrace();
			jsonResponse.setMessage(e.getMessage());
			jsonResponse.setResponseCode(500);
			jsonResponse.setSuccess(Boolean.FALSE);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setMessage("Cannot Place a Bid, Something went wrong! ");
			jsonResponse.setResponseCode(500);
			jsonResponse.setSuccess(Boolean.FALSE);
		}
		return jsonResponse;
	}

	@GetMapping(value = "/retrieve-productbid/user/{userid}")
	@ResponseBody
	public JsonResponse<Object> retrieveProductBidByUser(@PathVariable(name = "userid") Long userId,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		List<ProductBid> productBid = productBidService.findProductBidByUserId(userId);
		for (ProductBid tempProductBid : productBid) {
			tempProductBid.setUser(null);
			tempProductBid.getProduct().setMaximumBidAmount(tempProductBid.getProduct().getMaximumBid());			
			tempProductBid.getProduct().setUser(null);
		}
		jsonResponse.setResult(productBid);
		return jsonResponse;
	}
	
	@GetMapping(value = "/retrieve-won-productbid/user/{userid}")
	@ResponseBody
	public JsonResponse<Object> retrieveWonProductBidByUser(@PathVariable(name = "userid") Long userId,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		List<ProductBid> productBid = productBidService.findWonProductBidByUserId(userId);
		for (ProductBid eachProductBid : productBid) {
			eachProductBid.setUser(null);
			eachProductBid.getProduct().setMaximumBidAmount(eachProductBid.getProduct().getMaximumBid());			
			eachProductBid.getProduct().setUser(null);
			eachProductBid.getProduct().setProductBid(null);
		}
		jsonResponse.setResult(productBid);
		return jsonResponse;
	}

}
