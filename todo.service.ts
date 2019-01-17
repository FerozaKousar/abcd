import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  readData():Observable<any>{
    return this.http.get('http://localhost:1221/rest/api/read')
  }

  insertData(TodoValue:string):Observable<any>{
    return this.http.post('http://localhost:1221/rest/api/insert',{
      name:TodoValue
    })
  }

  deleteAll():Observable<any>{
    return this.http.get('http://localhost:1221/rest/api/deleteAll')
  }

  deleteSelected(TodoValue:string):Observable<any>{
    return this.http.post('http://localhost:1221/rest/api/deleteSelected',{
      name:TodoValue
    })
  }
}
