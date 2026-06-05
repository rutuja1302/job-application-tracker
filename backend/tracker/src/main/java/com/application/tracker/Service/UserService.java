package com.application.tracker.Service;

import org.springframework.http.ResponseEntity;

import com.application.tracker.dto.AuthRequest;
import com.application.tracker.entity.User;

public interface UserService {
    User createNewUser(User user);

    ResponseEntity<String> login(AuthRequest authRequest);
}
