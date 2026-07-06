package com.application.tracker.Service;

import java.util.List;

import com.application.tracker.dto.ApplicationDto;
import com.application.tracker.entity.Status;

public interface ApplicationService {
    List<ApplicationDto> getApplicationsForUser(Long userId);
    ApplicationDto createApplication(ApplicationDto application, Long userId);
    ApplicationDto updateApplication(ApplicationDto application, Long userId);
    List<Status> getStatusList();
}
