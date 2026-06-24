package com.application.tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.tracker.Service.ApplicationService;
import com.application.tracker.dto.ApplicationDto;
import com.application.tracker.entity.Application;
import com.application.tracker.entity.User;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    private User loggedInUser;

    @GetMapping("/applications")
    public List<ApplicationDto> getAllApplicationsForUser(){
        this.getLoggedInUser();
        List<ApplicationDto> applications = applicationService.getApplicationsForUser(this.loggedInUser.getId());

        return applications;
    }

    @PostMapping("/create-application")
    public Application createNewApplication(@RequestBody Application application){
        this.getLoggedInUser();
        return applicationService.createApplication(application, this.loggedInUser.getId());
    }

    @PutMapping("/update-application")
    public Application updateApplication(@RequestBody Application application){
        this.getLoggedInUser();
        return applicationService.updateApplication(application, this.loggedInUser.getId());
    }

    private void getLoggedInUser(){
        Authentication authentication =
            SecurityContextHolder.getContext().getAuthentication();
        this.loggedInUser = (User) authentication.getPrincipal();
    }
}
