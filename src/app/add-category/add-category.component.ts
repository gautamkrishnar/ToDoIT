import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../shared/services/category.service';
import { Router } from '@angular/router';
import { PreviousRouteService } from '../shared/services/previous-route.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  category = new FormControl('', [Validators.required]);
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  constructor(private breakpointObserver: BreakpointObserver,
              private categoryService: CategoryService,
              private router: Router,
              private previousRouteService: PreviousRouteService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addNewCategory() {
    this.category.markAsTouched();
    if (!this.category.errors) {
      this.snackBarRef = this.snackBar.open('Successfully added new category', 'Ok', { duration: 2000 });
      this.categoryService.addNewCategory(this.category.value);
      this.category.reset();
    }
  }

  cancelAdd() {
    const previousUrl = this.previousRouteService.getPreviousUrl();
    if (previousUrl) {
      this.router.navigate([previousUrl]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
