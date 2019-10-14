import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: 'todo-update/:id', component: TodoUpdateComponent },

  { path: '**', redirectTo: 'todo-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
