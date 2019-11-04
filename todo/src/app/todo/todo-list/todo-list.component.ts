import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: any;
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'actions'];

  constructor(public service: TodoService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    return this.service.getEntities().subscribe(result => {
      this.todoList = result;
    });
  }

  deleteToDo(model: any){
    return this.service.delete(model).subscribe(() => this.getToDos());
  }
}
