import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../interfaces/category';
import { AppConstants } from '../constants/app-constants';
import { StorageServiceService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryListSubject: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  categoryList: Category[] = [];

  constructor(private storageServiceService: StorageServiceService) {
    // Code that restores the category list data from local storage if any
    const categoryData: Category[] = this.storageServiceService.getItem(AppConstants.CATEGORY_STORAGE_KEY);
    if (categoryData) {
      this.categoryList = categoryData;
      this.categoryListSubject.next(this.categoryList);
    }
  }

  addNewCategory(categoryName) {
    this.categoryList.push(
      {
        id: Math.random().toString(36).substr(2, 9),
        name: categoryName
      }
    );
    this.storageServiceService.setItem(AppConstants.CATEGORY_STORAGE_KEY, this.categoryList);
    this.categoryListSubject.next(this.categoryList);
  }
}
