package com.application.tracker.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.tracker.Repository.ApplicationRepository;
import com.application.tracker.Repository.UserRepository;
import com.application.tracker.Service.ApplicationService;
import com.application.tracker.entity.Application;
import com.application.tracker.entity.User;

@Service
public class ApplicationServiceImpl implements ApplicationService{

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Application> getApplicationsForUser(Long userId){
        List<Application> jobApplications = applicationRepository.findByUserId(userId);
        return jobApplications;
    }

    @Override
    public Application createApplication(Application application, Long userId){
        User user = userRepository.findById(userId).orElseThrow();

        application.setUser(user);
        Application newApplication = applicationRepository.save(application);
        return newApplication;
    }
}
