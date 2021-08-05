import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private _http: HttpClient) { }

  getPeopleData(){
    return this._http.get('http://localhost:3000/api');
  }
}
