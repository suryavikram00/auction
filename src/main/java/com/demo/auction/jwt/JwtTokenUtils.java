package com.demo.auction.jwt;

import java.security.Key;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import com.demo.auction.user.User;
import com.demo.auction.user.UserDao;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
@CrossOrigin(origins = "http://localhost:4200")
public class JwtTokenUtils {

	private static final String API_KEY = "apikey"; //salt

	// 20 mts from the token is created
	private static final Long EXPIRATION_MILLI_SECOND = (long) 1200000;

	private static final String ISSUER = "auction"; //merchant_key
	@Autowired
	private UserDao userDao;

	public static void main(String args[]) {
		// String jwtToken = createJWT("1", "dummy" );
		// System.out.println("generated jwt token :: " + jwtToken);
		String jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMCIsImlhdCI6MTU5NDk4MjA5MCwic3ViIjoic3VyeWEiLCJpc3MiOiJhdWN0aW9uIiwidXNlciI6eyJ1c2VySWQiOjMwLCJmaXJzdE5hbWUiOiJtYWhlc2giLCJsYXN0TmFtZSI6InN1cnlhIiwicGhvbmUiOiI3MjgzNzI4MyIsImVtYWlsIjoic3VyeWEiLCJwYXNzd29yZCI6IiQyYSQxMCR4bWF2WlpBSTdRRU8yblQ0S0VmbEJlWWo0RFA2TnBDQXRlTld5bkRmTFBNVE5VN3AwQXpxZSIsImNyZWF0ZWRPbiI6MTU5MTkwMzUxMDAwMCwidXBkYXRlZE9uIjoxNTkxOTAzNTEwMDAwLCJ1ZHBhdGVkQnkiOm51bGwsImFjdGl2ZSI6dHJ1ZSwicHJvZHVjdCI6W10sInByb2R1Y3RCaWRkZWQiOltdLCJhZGRyZXNzIjpbXX0sImV4cCI6MTU5NDk4MzI5MH0.PPfqA2HioPqrXF3FQAmqS1mSK2t91ctwtmsxc6D9NeA";
		// This line will throw an exception if it is not a signed JWS (as
		// expected)
		Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(API_KEY)).parseClaimsJws(jwtToken)
				.getBody();
		System.out.println("ID: " + claims.getId());
		System.out.println("claims: " + claims.get("user"));
		System.out.println("Subject: " + claims.getSubject());
		System.out.println("Issuer: " + claims.getIssuer());
		System.out.println("Expiration: " + claims.getExpiration());
	}

	// Sample method to construct a JWT
	public static String createJWT(User user) {

		// The JWT signature algorithm we will be using to sign the token
		SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

		long nowMillis = System.currentTimeMillis();
		Date now = new Date(nowMillis);

		// We will sign our JWT with our ApiKey secret
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(API_KEY);
		Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

		// Creating Object of ObjectMapper define in Jakson Api
		ObjectMapper Obj = new ObjectMapper();

		// Let's set the JWT Claims
		JwtBuilder builder = null;
		builder = Jwts.builder().setId(user.getUserId().toString()).setIssuedAt(now).setSubject(user.getEmail())
				.setIssuer(ISSUER).claim("user", user).signWith(signatureAlgorithm, signingKey);

		// if it has been specified, let's add the expiration
		if (EXPIRATION_MILLI_SECOND >= 0) {
			long expMillis = nowMillis + EXPIRATION_MILLI_SECOND;
			Date exp = new Date(expMillis);
			builder.setExpiration(exp);
		}

		// Builds the JWT and serializes it to a compact, URL-safe string
		return builder.compact();
	}

	public static User getUser() {
		// Claims claims =
		// Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(API_KEY)).parseClaimsJws(jwt)
		// .getBody();
		// System.out.println("claims: " + claims.get("user"));
		User user = null;
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (principal instanceof User) {
			user = ((User) principal);
		}
		return user;
		// return (User) claims.get("user");
	}

	// Sample method to validate and read the JWT
	public void parseJWT(String jwt) {

		// This line will throw an exception if it is not a signed JWS (as
		// expected)
		Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(API_KEY)).parseClaimsJws(jwt)
				.getBody();
		System.out.println("ID: " + claims.getId());
		System.out.println("claims: " + claims.get("user"));
		System.out.println("Subject: " + claims.getSubject());
		System.out.println("Issuer: " + claims.getIssuer());
		System.out.println("Expiration: " + claims.getExpiration());
		// Get your user
		Optional<User> userOptional = userDao.findById(Long.parseLong(claims.getId()));
		User user = null;
		if (userOptional.isPresent()) {
			user = userOptional.get();
		}

		if (user != null) {
			// Seting in your AuthenticationPrincipal the user
			SecurityContextHolder.getContext()
					.setAuthentication(new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>()));
		}

	}

	public static void bcryptPassword() {
		if (new BCryptPasswordEncoder().matches(new String("123456"),
				"$2a$10$h1pHw3ursz/4G3U3vOW3LOqG6ZodQJN3Orxug0AfGuc0M35TLLE6S")) {
			System.out.println("hello");
		} else {
			throw new RuntimeException("Error! Password is Incorrect");
		}
	}

}
