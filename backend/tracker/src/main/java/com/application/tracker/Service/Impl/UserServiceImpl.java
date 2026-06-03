package com.application.tracker.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.tracker.Repository.UserRepository;
import com.application.tracker.Service.UserService;
import com.application.tracker.entity.User;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User createNewUser(User user) {
        User registeredUser = new User();
        try {
            registeredUser = userRepository.save(user);
        } catch (Exception e) {
            log.error("Error in user creation: "+e);
        }
        return registeredUser;
    }
}