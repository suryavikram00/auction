package com.demo.auction.address;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.auction.utils.JsonResponse;

@RestController
public class AddressController {

	@Autowired
	private IAddressService addressService;

	@PostMapping(value = "/add-update-address")
	public JsonResponse<Object> addUpdateAddress(@RequestBody Address address, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			address = addressService.addUpdateAddress(address);
			jsonResponse.setResult(address);
			jsonResponse.setMessage("Address have been successfully saved");
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setResponseCode(200);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setMessage("Cannot Save Address");
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setResponseCode(500);
		}
		return jsonResponse;
	}
}
