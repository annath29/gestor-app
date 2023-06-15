import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() name!:String;
  @Output() data: EventEmitter<any> = new EventEmitter()
  titulo!:String;
  descripcion!: String;

  constructor(private service: TaskService,
    private router:Router){}
  
  submitForm() {
    this.data.emit({
      title:this.titulo,
      description:this.descripcion
    });
    this.router.navigateByUrl('/task/list');
  
  }

}
