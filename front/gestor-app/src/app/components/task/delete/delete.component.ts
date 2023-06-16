import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent {
  id:any;
  constructor(private service: TaskService){}

  delete(){
    this.id=this.service.currentId;
    this.service.delete(this.id).subscribe();
    this.cancel();
  }

  cancel(){
    window.location.href = '/task/list';
  }
}
