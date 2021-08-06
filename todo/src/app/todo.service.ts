import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http : HttpClient) { }

  getTodoData(){
    return this._http.get('http://localhost:3000/api/todos/');
  }
  
}
