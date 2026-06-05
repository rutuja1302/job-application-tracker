package com.application.tracker.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.application.tracker.Repository.UserRepository;
import com.application.tracker.Service.UserService;
import com.application.tracker.dto.AuthRequest;
import com.application.tracker.entity.User;
import com.application.tracker.exceptions.IncorrectPasswordException;
import com.application.tracker.exceptions.UserNotFoundException;
import com.application.tracker.util.JwtUtil;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtil jwtUtil;

    @Override
    public User createNewUser(User user) {
        User registeredUser = new User();
        try {
            //check if user already exists in the system
            User existingUser = userRepository.findByEmail(user.getEmail());

            if(existingUser==null || existingUser.getId()==null){
                user.setPassword(passwordEncoder.encode(user.getPassword()));
                registeredUser = userRepository.save(user);
            }
            
        } catch (Exception e) {
            log.error("Error in user creation: "+e);
        }
        return registeredUser;
    }

    @Override
    public ResponseEntity<String> login(AuthRequest loginDetails){
        //email check
        User user = userRepository.findByEmail(loginDetails.getEmail());
        if(user!=null && user.getId()!=null && user.getId()>0){
            //password check
            boolean passwordCheck = passwordEncoder.matches(loginDetails.getPassword(), user.getPassword());
            if(passwordCheck){
                //generate JWT
                String token = jwtUtil.generateToken(user.getEmail());
                return ResponseEntity.ok(token);
            }else{
                throw new IncorrectPasswordException("Password is incorrect");
            }
        }else{
            throw new UserNotFoundException("User Not Found");
        }
    }
}