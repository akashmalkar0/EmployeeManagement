package com.emp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.emp.model.AuthenticationResponse;
import com.emp.model.Role;
import com.emp.model.User;
import com.emp.repo.UserRepo;

@Service
public class AuthenticationService {
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authManager;
	
	public AuthenticationResponse register(User request) {
		User user=new User();
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRole(request.getRole());
		
		user=userRepo.save(user);
		String token=jwtService.generateToken(user);
		Role userRole=user.getRole();
		String role=userRole.toString();
		return new AuthenticationResponse(token,role);
}
	
	public AuthenticationResponse authenticate(User request) {
		authManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getUsername(),
						request.getPassword()
						)
				);
		
		User user=userRepo.findByUsername(request.getUsername());
		String token=jwtService.generateToken(user);
		Role userRole=user.getRole();
		String role=userRole.toString();
		return new AuthenticationResponse(token,role);
	}
}
