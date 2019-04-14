import { Injectable } from '@angular/core';
import { Status, Todo } from '../interfaces/todo';
import { StorageServiceService } from './storage-service.service';
import { AppConstants } from '../constants/app-constants';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Todo[] = [];
  todoListSubject: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor(private storageServiceService: StorageServiceService) {
    const todoData: Todo[] = this.storageServiceService.getItem(AppConstants.TODO_STORAGE_KEY);
    if (todoData) {
      this.todoList = todoData;
      this.todoListSubject.next(this.todoList);
    }
  }

  addNewToDo(task: string, category?: Category, dueDateTime?: Date) {
  const toDoItem: Todo = {
      category,
      createdAt: new Date(),
      doneOn: null,
      dueDateTime,
      id: Math.random().toString(36).substr(2, 9),
      status: Status.TODO,
      task
    };
  this.todoList.push(toDoItem);
  this.storageServiceService.setItem(AppConstants.TODO_STORAGE_KEY, this.todoList);
  this.todoListSubject.next(this.todoList);
  }

  deleteToDo(todo: Todo) {
    this.todoList = this.todoList.filter((value) => value !== todo);
    this.storageServiceService.setItem(AppConstants.TODO_STORAGE_KEY, this.todoList);
    this.todoListSubject.next(this.todoList);
  }

  getToDoById(id: string): Todo {
    return this.todoList.find((element) => element.id === id);
  }
}
