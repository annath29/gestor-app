import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {
  @Input() component!:String;
  @Output() accepted:EventEmitter<any>=new EventEmitter();
  @Output() close:EventEmitter<any>=new EventEmitter();
  constructor(private service: TaskService){}

}
