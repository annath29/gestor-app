package com.example.gestor.repository;

import com.example.gestor.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Repository for persistence
 */
@Repository
public interface ITaskRepository extends JpaRepository<Task, UUID> {

}
