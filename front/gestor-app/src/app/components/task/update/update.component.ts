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
  
  tarea!:Task;

  constructor(private service: TaskService){}

  ngOnInit(){
    this.id=this.service.currentId;
     this.service.findById(this.id).subscribe((dato)=>{ 
     this.descripcion=dato.description
     this.titulo=dato.title
     })
  }

  update(data:Task){    
    this.id=this.service.currentId;
    
    this.tarea={
      id:this.id,
      title:data.title,
      description:data.description,      
    }

    this.service.update(this.tarea,this.id).subscribe();       
  }
}
