import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'TodoList';
  todoList:FormGroup;
  newArr;
  todoData;
  checked;
  constructor(private fb:FormBuilder, private todoservice: TodoService){}

    ngOnInit(){
      this.todoList= this.fb.group({
        todoValue:[],
        checkboxDisplay:[]  
        });
    this.todoservice.readData().subscribe(data=>{
      this.newArr=data;
    })
  }
  addTodo():void{
    this.todoData= this.todoList.get('todoValue').value;
    this.todoservice.insertData(this.todoData).subscribe()
    location.reload(true);
  }
  deleteAll():void{
    this.todoservice.deleteAll().subscribe()
    location.reload(true);
  }
  deleteSelected(todoValue):void{
    console.log(todoValue);
    if(this.checked){
      this.todoservice.deleteSelected(todoValue).subscribe()
      location.reload(true);
    }
  }
  selected(event){
    if(event.target.checked){
      this.checked=true;
    }
  }
  
}
