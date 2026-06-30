package com.application.tracker.Service;

import java.util.List;

import com.application.tracker.dto.ApplicationDto;
import com.application.tracker.entity.Application;
import com.application.tracker.entity.Status;

public interface ApplicationService {
    List<ApplicationDto> getApplicationsForUser(Long userId);
    ApplicationDto createApplication(ApplicationDto application, Long userId);
    Application updateApplication(Application application, Long userId);
    List<Status> getStatusList();
}
