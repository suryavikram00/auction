package com.demo.auction.securityutils;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.demo.auction.jwt.JwtTokenUtils;

@Component
@Order(3)
public class TokenAuthFilter implements Filter {
	@Autowired
	private JwtTokenUtils jwtTokenUtils;
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}
 
	@Override
	public void destroy() {
	}

	@Override
	@CrossOrigin(origins = "http://localhost:4200")
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpServletRequest = ((HttpServletRequest) request);
		HttpServletResponse httpServletResponse = ((HttpServletResponse) response);

		chain.doFilter(httpServletRequest, httpServletResponse);
		return;
		
//		if(httpServletRequest.getRequestURI().contains("login") 
//				|| httpServletRequest.getRequestURI().contains("sign-up")
//				|| httpServletRequest.getRequestURI().contains("/")){
//			chain.doFilter(httpServletRequest, httpServletResponse);
//			return;
//		}
//		
//		try {
//			String jwtToken = httpServletRequest.getHeader("token") != null ? httpServletRequest.getHeader("token") : "";
//			jwtTokenUtils.parseJWT(jwtToken);
//			chain.doFilter(httpServletRequest, httpServletResponse);
//		} catch (Exception e) {
//			e.printStackTrace();
//			httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//			
//		}
	}

}
