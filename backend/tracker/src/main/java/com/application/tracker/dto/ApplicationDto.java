package com.application.tracker.dto;

import com.application.tracker.entity.Status;

import lombok.Data;

@Data
public class ApplicationDto {
    private Long applicationId;
    private String jobTitle;
    private String companyName;
     private String jobLink;
    private Status status;
    private Integer salary;
    private String location;
    private String contactPerson;
    private String notes;
}
