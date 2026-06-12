package com.application.tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.tracker.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email);
}
