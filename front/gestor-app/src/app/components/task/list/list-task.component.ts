import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
})

export class ListTaskComponent implements OnInit{

  public tasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe((tasks)=>{
      this.tasks=tasks;
      console.log(tasks)
    });
  }

}
