package com.demo.auction.user;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.auction.jwt.JwtTokenUtils;
import com.demo.auction.utils.JsonResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "/update-user")
	@ResponseBody
	public JsonResponse<Object> addUpdateUser(@RequestBody User user, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			user = userService.addUpdateUser(user);
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setMessage("Successfully updated the User :: " + user);
			jsonResponse.setResponseCode(200);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage("Error while udpating user!");
			jsonResponse.setResponseCode(500);
		}
		jsonResponse.setResult(user);
		return jsonResponse;
	}

	@PostMapping(value = "/sign-up")
	@ResponseBody
	public JsonResponse<Object> signUp(@RequestBody User user, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			user = userService.addUpdateUser(user);
			String jwtToken = JwtTokenUtils.createJWT(user);
			jsonResponse.setResult(jwtToken);
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setMessage("Successfully signed up for the User ");
			jsonResponse.setResponseCode(200);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage("Error while signing up!");
			jsonResponse.setResponseCode(500);
		}
		return jsonResponse;
	}

	@PostMapping(value = "/login")
	@ResponseBody
	public JsonResponse<Object> login(@RequestBody User user, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			String jwtToken = userService.login(user);
			jsonResponse.setResult(jwtToken);
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setMessage("Successfully Logged in for the User! ");
			jsonResponse.setResponseCode(200);
		} catch (RuntimeException e) {
			e.printStackTrace();
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage(e.getMessage());
			jsonResponse.setResponseCode(500);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage("Error while signing up!");
			jsonResponse.setResponseCode(500);
		}
		return jsonResponse;
	}
}
