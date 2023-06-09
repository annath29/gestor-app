package com.example.gestor.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.io.Serializable;
import java.util.UUID;

/**
 * Task DTO
 */
public class TaskDTO implements Serializable {
    /**
     * Serialization ID id
     */
    private static final long serialVersionUID=1l;
    private UUID id;
    /**
     * attributes of a task
     */
    @NotNull
    @NotBlank
    @Size(max=70)
    private String name;

    @NotNull
    @NotBlank
    private String description;
    @NotNull
    private Boolean state;

    public TaskDTO() {
    }

    public TaskDTO(UUID id, String name, String description, Boolean state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.state = state;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
