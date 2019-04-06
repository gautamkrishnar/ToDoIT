import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Category} from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryListSubject: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  categoryList: Category[] = [];
  constructor() { }
  addNewCategory(categoryName) {
    this.categoryList.push(
      {
        id: Math.random().toString(36).substr(2, 9),
        name: categoryName
      }
    );
    this.categoryListSubject.next(this.categoryList);
  }
}
