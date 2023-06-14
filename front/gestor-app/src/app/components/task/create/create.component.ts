import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  @Output() name:String='Crear Tarea';
  
  create(data:any){
    console.log("titulo",data.titulo);    
    console.log("titulo",data.descripcion);    
  }
}
