package com.application.tracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.tracker.Service.UserService;
import com.application.tracker.entity.User;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){
        User registeredUser = userService.createNewUser(user);
        return registeredUser;
    }
}
