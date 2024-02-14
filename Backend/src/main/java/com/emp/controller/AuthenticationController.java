package com.emp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.model.AuthenticationResponse;
import com.emp.model.User;
import com.emp.service.AuthenticationService;

@RestController
@RequestMapping("/user")
public class AuthenticationController {
	@Autowired
	private AuthenticationService authService;
	
	@PostMapping("/register")
	public AuthenticationResponse register(@RequestBody User request) {
		return authService.register(request);
	}
	
	@PostMapping("/login")
	public AuthenticationResponse login(@RequestBody User request) {
		return authService.authenticate(request);
	}

}
