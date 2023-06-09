package com.example.gestor.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.UUID;

/**
 * Task entity model for persistence
 */
@Entity
@Table(name = "Tasks")
public class Task {
    /**
     * Generated id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(unique = true,nullable = false)
    private UUID id;

    /**
     * attributes of a task
     */
    @Size(max=50)
    @Column(name="title",nullable = false)
    private String title;

    @Size(max=90)
    @Column(nullable = false)
    private String description;

    private Boolean state;

    public Task() {
    }

    public Task(UUID id, String title, String description, Boolean state) {
        this.id = id;
        this.title=title;
        this.description = description;
        this.state = state;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }
}
