package com.application.tracker.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.tracker.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long>{
    List<Application> findByUserId(Long userId);
}
