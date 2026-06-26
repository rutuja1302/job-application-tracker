package com.application.tracker.Service;

import java.util.List;

import com.application.tracker.dto.ApplicationDto;
import com.application.tracker.entity.Application;

public interface ApplicationService {
    List<ApplicationDto> getApplicationsForUser(Long userId);
    Application createApplication(Application application, Long userId);
    Application updateApplication(Application application, Long userId);
}
