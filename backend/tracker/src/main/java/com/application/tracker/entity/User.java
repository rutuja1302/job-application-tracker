package com.application.tracker.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.ToString;

@Entity
@Table(name = "users")
@Data
@ToString(exclude = "jobApplications")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message="User name is required")
    private String name;
    @Email(message="Email format incorrect")
    private String email;
    @NotBlank(message="Password is required")
    private String password;

    //one user = multiple applications
    @OneToMany(mappedBy="user", fetch = FetchType.LAZY)
    List<Application> jobApplications;
}
