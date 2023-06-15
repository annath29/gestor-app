package com.example.gestor.service;

import com.example.gestor.entity.Task;
import com.example.gestor.repository.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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
    public Task saveTask(Task task) throws Exception {
        try{
            repository.save(task);
            return task;
        }
        catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }

    /**
     * Update task
     * @param task
     * @param id
     * @return update task
     * @throws Exception
     */
    public Task updateTask(Task task, UUID id) throws Exception {
        requireNonNull(id);
        requireNonNull(task);

        if (!repository.existsById(id)){
            throw new Exception("Tarea no encontrada");
        }

        var exist=repository.findById(id).orElseThrow();
        exist.setTitle(task.getTitle());
        exist.setDescription(task.getDescription());

        return repository.save(exist);
    }

    /**
     * Delete by id a task
     * @param id
     * @return boolean
     * @throws Exception
     */
    public boolean deleteTask(UUID id) throws Exception {
        requireNonNull(id);
        if (!repository.existsById(id)){
            throw new Exception("Tarea no encontrada");
        }
        repository.deleteById(id);
        return true;
    }
}
