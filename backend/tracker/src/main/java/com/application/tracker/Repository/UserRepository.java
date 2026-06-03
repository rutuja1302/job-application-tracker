package com.application.tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.tracker.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
