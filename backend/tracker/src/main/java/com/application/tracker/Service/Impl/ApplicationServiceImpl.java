package com.application.tracker.Service.Impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.tracker.Repository.ApplicationRepository;
import com.application.tracker.Repository.UserRepository;
import com.application.tracker.Service.ApplicationService;
import com.application.tracker.entity.Application;
import com.application.tracker.entity.User;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
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
        application.setCreatedBy(userId);
        application.setCreationTime(LocalDateTime.now());
        
        Application newApplication = applicationRepository.save(application);
        return newApplication;
    }

    @Override
    public Application updateApplication(Application application, Long userId){
        Application updatedApplication = new Application();
        Optional<Application> app = applicationRepository.findById(application.getApplicationId());

        if(app.isPresent()){
            User user = userRepository.findById(userId).orElseThrow();

            application.setUser(user);
            application.setUpdatedBy(userId);
            application.setUpdationTime(LocalDateTime.now());

            updatedApplication = applicationRepository.save(application);
        }else{
            throw new IllegalArgumentException("Application Not Found!");
        }
        return updatedApplication;
    }
}
