import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

declare var bootstrap: any;

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
})

export class ListTaskComponent implements OnInit,AfterViewInit{

  public tasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  getAll() {
    this.service.getAll().subscribe((tasks)=>{
      this.tasks=tasks;
      console.log(tasks)
    });
  }

}
