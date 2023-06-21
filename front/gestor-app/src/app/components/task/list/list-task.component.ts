import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
})

export class ListTaskComponent implements OnInit,AfterViewInit{
  //@Output() id:EventEmitter<any> = new EventEmitter();
  public tasks: Task[] = [];
  @Input() state!:string;
  public mostrar: boolean = false;
  term:any;
  
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

  update(id:any){
    this.service.currentId=id;
    this.router.navigateByUrl('/task/update');
  }
  
  complete(task:Task){
    task.state=!task.state;
    this.service.complete(task,task.id);
  }

  delete(id:string){
    this.service.currentId=id;
    this.router.navigateByUrl('/task/delete')
  }
  
  mostrarInput() {
    this.mostrar = !this.mostrar;
    if(!this.mostrar){
      this.getAll()
    }
    this.term='';
  }

  filter(term:boolean){
    this.service.findByState(term).subscribe((datos)=>{
      this.tasks=datos;
    });    
  }
}
