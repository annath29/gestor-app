package com.example.gestor.controller;

import com.example.gestor.entity.Task;
import com.example.gestor.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static java.util.Objects.requireNonNull;

/**
 * Controller of task model
 */
@RestController
@RequestMapping(value = "/api-task")
public class TaskController {
    /**
     * Service
     */
    @Autowired
    TaskService service;

    /**
     * Get All task
     * @return list of task
     */
    @GetMapping
    public List<Task> findAll(){
        return service.findAll();
    }

    /**
     * Create new of task
     * @param task
     * @return task created
     */
    @PostMapping
    public Task create(@Validated @RequestBody Task task) throws Exception {

        return service.saveTask(task);
    }

    /**
     * Update a task
     * @param task
     * @param id
     * @return update task
     * @throws Exception
     */
    @PutMapping("/{id}")
    public Task update(@Validated @RequestBody Task task,@PathVariable UUID id) throws Exception {
        return service.updateTask(task,id);
    }

    /**
     * Deleted a task
     * @param id
     * @return boolean
     * @throws Exception
     */
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable UUID id) throws Exception {
        return service.deleteTask(id);
    }

}
