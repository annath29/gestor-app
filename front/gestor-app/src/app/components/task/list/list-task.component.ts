import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
})

export class ListTaskComponent implements OnInit,AfterViewInit{

  public tasks: Task[] = [];
  public check:boolean=true;
  constructor(
    private service: TaskService,
    private router:Router)
  { }

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
      // console.log(tasks)
    });
  }
}
