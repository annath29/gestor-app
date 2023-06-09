import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 
  private apiUrl:string='http://localhost:8080/api-task'

  constructor(private http:HttpClient) { }

  getAll():Observable<Task[]>{
    return  this.http.get<Task[]>(this.apiUrl);
  }
}
