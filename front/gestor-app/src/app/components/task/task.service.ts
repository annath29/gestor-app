import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public currentId:any;
 
  private apiUrl:string='http://localhost:8080/api-task'

  constructor(private http:HttpClient) { }

  getAll():Observable<Task[]>{
    return  this.http.get<Task[]>(this.apiUrl);
  }

  save(task:Task):Observable<Task>{
   
    var resultado= this.http.post<Task>(this.apiUrl,task);    
    return resultado;
  }

  findById(id:String):Observable<Task>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  findByState(state:boolean):Observable<Task[]>{
    const url = `${this.apiUrl}/filter/${state}`;
    return this.http.get<Task[]>(url);
  }

  update(task:Task,id:String):Observable<Task>{
    const url = `${this.apiUrl}/${id}`;  
    return this.http.put<Task>(url,task);
  }

  complete(task:Task,id:String):Observable<Task>{
    const url = `${this.apiUrl}/complete/${id}`;  
    return this.http.put<Task>(url,task);
  }

  delete(id:String):Observable<boolean>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url)
    }
}
