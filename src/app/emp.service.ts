import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private url:string="/assets/data/employee.json";


  constructor(private http:HttpClient) { }

  getEmployee():Observable<employe[]>{
   return this.http.get<employe[]>(this.url);

  }

}
