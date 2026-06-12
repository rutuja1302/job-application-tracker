package com.application.tracker.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="applications")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long applicationId;
    
    private String jobTitle;
    private String companyName;
    private String jobLink;
    private Integer status;
    private Integer salary;
    private String location;
    private String contactPerson;
    private String notes;
    private Long createdBy;
    private LocalDateTime creationTime;
    private Long updatedBy;
    private LocalDateTime updationTime;
}
