package com.application.tracker.mapper;

import org.mapstruct.Mapper;

import com.application.tracker.dto.ApplicationDto;
import com.application.tracker.entity.Application;

@Mapper(componentModel = "spring")
public interface ApplicationMapper {
    ApplicationDto toDto(Application application);
}
