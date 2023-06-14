package com.example.gestor.controller;

import com.example.gestor.entity.Task;
import com.example.gestor.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Task create(@Validated @RequestBody Task task){

        return service.saveTask(task);
    }

}
