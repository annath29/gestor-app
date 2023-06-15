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

  save(task:Task):Observable<Task>{
    console.log(task);
    var resultado= this.http.post<Task>(this.apiUrl,task);
    console.log(resultado);
    
    return resultado;
  }
  update(task:Task,id:String):Observable<Task>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Task>(url,task);
  }
  delete(id:string):Observable<boolean>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url)
    }
}
