import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  form: FormGroup;

  constructor(public service: TodoService,
    public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
  }

  addToDo() {
    return this.service.add(this.form.value).subscribe(() => this.returnListPage());
  }

  returnListPage() {
    this.router.navigate(['/todo-list']);
  }

}
