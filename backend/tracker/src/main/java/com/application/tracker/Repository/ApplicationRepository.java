package com.application.tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.tracker.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long>{

}
