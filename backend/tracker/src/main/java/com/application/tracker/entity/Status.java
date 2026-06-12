package com.application.tracker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="status")
@Data
public class Status {

    private Integer statusId;
    private String status;
}
