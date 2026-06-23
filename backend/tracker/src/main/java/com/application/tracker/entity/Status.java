package com.application.tracker.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="status")
@Data
public class Status {
    @Id
    @Column(name="status_id")
    private Integer statusId;
    private String status;
}
