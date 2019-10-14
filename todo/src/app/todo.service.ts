import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { ToDo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService extends BaseService<ToDo> {

    constructor(public http: HttpClient) {
        super(http, 'todo');
    }
}