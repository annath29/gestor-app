import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  @Output() name:String='Crear Tarea';
  tarea!:Task;
  constructor(private service:TaskService){}

  create(data:Task){
    //console.log("titulo",data.title);    
   // console.log("descripcion",data.description);    

    this.tarea={
      id:"",
      title:data.title,
      description:data.description,
      state:false
    }

    this.service.save(this.tarea).subscribe();
    this.cancel();
  }

  cancel(){
    window.location.href = '/task/list';
  }
}
