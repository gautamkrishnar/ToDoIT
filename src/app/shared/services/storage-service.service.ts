import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { AppConstants } from '../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private localStorageService: LocalStorageService) {
  }

  setItem(key, value) {
    this.localStorageService.set(key, JSON.stringify(value), AppConstants.KEY_PREFIX);
  }

  getItem(key) {
    const val = this.localStorageService.get(key, AppConstants.KEY_PREFIX);
    return val ? JSON.parse(val) : null;
  }
}
