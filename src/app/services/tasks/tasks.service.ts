import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from 'src/app/model/Task';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})



export class TasksService {


  // dpepency injection
  constructor(private http: HttpClient) { }


  getTask(): Observable<any> {
    return this.http.get(`${environment.baseURL}`)
  }

  createPost(postData): Observable<any> {
    console.log(postData)
    return this.http.post(`${environment.baseURL}`, postData, httpOptions)
  }
  // getOnePost(id:number):Observable

}
