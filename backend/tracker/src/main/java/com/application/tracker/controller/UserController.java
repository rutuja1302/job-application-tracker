package com.application.tracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.tracker.Service.UserService;
import com.application.tracker.dto.AuthRequest;
import com.application.tracker.entity.User;

import jakarta.validation.Valid;

@RestController
@Validated
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody @Valid User user){
        User registeredUser = userService.createNewUser(user);
        return registeredUser;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest authRequest){
        return userService.login(authRequest);
    }
}
