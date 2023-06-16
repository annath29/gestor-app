package com.example.gestor.repository;

import com.example.gestor.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

/**
 * Repository for persistence
 */
@Repository
public interface ITaskRepository extends JpaRepository<Task, UUID> {
    @Query(value="SELECT t FROM Task t WHERE t.state = :state")
    List<Task> findByState(@Param("state")boolean state);

}
