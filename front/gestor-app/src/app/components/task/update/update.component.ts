import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
  id:any;
  @Output() name:String='Editar Tarea';
  @Output() titulo!:String;
  @Output() descripcion!:String;
  @Output() message:String="editar";

  continue!:boolean;
  
  tarea!:Task;

  constructor(private service: TaskService){}

  ngOnInit(){
    this.continue=false;
    this.id=this.service.currentId;
     this.service.findById(this.id).subscribe((dato)=>{ 
     this.descripcion=dato.description
     this.titulo=dato.title
     })
  }

  update(){    
    this.service.update(this.tarea,this.id).subscribe();  
    this.cancel();
  }

  complete(data:Task)
  {
    this.id=this.service.currentId;
    this.tarea={
       id:this.id,
       title:data.title,
       description:data.description,      
    }

    this.continue=true;
  }

  cancel(){
    console.log("cancel")
    window.location.href = '/task/list';
  }
}
