import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() name!:String;
  @Output() data: EventEmitter<any> = new EventEmitter()
  titulo!:String;
  descripcion!: String;

  constructor(private service: TaskService){}
  
  submitForm() {
    this.data.emit({
      titulo:this.titulo,
      descripcion:this.descripcion
    })
    //this.description=this.description;  
  }

}
