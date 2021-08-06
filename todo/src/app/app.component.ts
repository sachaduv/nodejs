import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : any;

  constructor(private fetchTodo : TodoService){ 
  }

  ngOnInit(){
    this.fetchTodo.getTodoData().subscribe((data)=>{
      this.todos = data;
    })
  }

}
