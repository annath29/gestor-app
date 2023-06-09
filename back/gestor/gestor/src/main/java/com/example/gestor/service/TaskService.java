package com.example.gestor.service;

import com.example.gestor.entity.Task;
import com.example.gestor.repository.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.requireNonNull;

/**
 * Task model functionalities
 */
@Service
public class TaskService {
    /**
     * Repository of task model
     */
    private final ITaskRepository repository;

    /**
     * service builder
     * @param repository
     */
    @Autowired
    public TaskService(ITaskRepository repository) {
        requireNonNull(repository);
        this.repository = repository;
    }

    /**
     * Get All task
     * @return list of task
     */
    public List<Task> findAll(){
        return repository.findAll();
    }

    /**
     * Create new of task
     * @param task
     * @return task created
     */
    public Task saveTask(Task task){
        return repository.save(task);
    }
}
