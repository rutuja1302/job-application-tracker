package com.application.tracker.Service;

import java.util.List;

import com.application.tracker.entity.Application;

public interface ApplicationService {
    List<Application> getApplicationsForUser(Long userId);
    Application createApplication(Application application, Long userId);
}
