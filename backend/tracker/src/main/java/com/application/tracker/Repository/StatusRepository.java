package com.application.tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.tracker.entity.Status;

public interface StatusRepository extends JpaRepository<Status, Integer> {

}
