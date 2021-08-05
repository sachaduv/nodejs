import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public persons:any = null;

  constructor(private _people : PeopleService){

  }

  ngOnInit(){
    this._people.getPeopleData().subscribe((data)=>{
      this.persons = data;
    })
  }
}
