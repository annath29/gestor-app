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
  @Input() titulo!:String;
  @Input() descripcion!: String;
  
  constructor(private router:Router){}
  
  submitForm() {
    this.data.emit({
      title:this.titulo,
      description:this.descripcion
    });
    //this.router.navigateByUrl('/task/list');  
   this.close();
  }

  close(){
    window.location.href = '/task/list';
  }

}
