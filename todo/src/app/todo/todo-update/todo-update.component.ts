import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToDo } from 'src/app/todo';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {

  form: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(public service: TodoService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl()
    });

    this.getTodo(this.id);

    console.log('chegou')
  }

  getTodo(id: any) {
    return this.service.getById(id).subscribe(result => {
      this.form.setValue(result);
      console.log(result)
    });
  }

  returnListPage() {
    this.router.navigate(['/todo-list']);
  }

  updateToDo(){
    this.service.update(this.form.value).subscribe(() => this.returnListPage());
  }

}
