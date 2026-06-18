package com.application.tracker.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="applications")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="application_id")
    private Long applicationId;
    @Column(name="job_title")
    private String jobTitle;
    @Column(name="company_name")
    private String companyName;
    @Column(name="job_link")
    private String jobLink;
    private Integer status;
    private Integer salary;
    private String location;
    @Column(name="contact_person")
    private String contactPerson;
    private String notes;

    @ManyToOne
    @JoinColumn(name="user_id") //as foreign key is in this table; application is the owning side
    private User user;
    @Column(name="created_by")
    private Long createdBy;
    @Column(name="creation_time")
    private LocalDateTime creationTime;
    @Column(name="updated_by")
    private Long updatedBy;
    @Column(name="updation_time")
    private LocalDateTime updationTime;
}
