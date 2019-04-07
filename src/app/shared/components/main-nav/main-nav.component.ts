import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  categoryList: Category[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
              private categoryService: CategoryService,
              public dialog: MatDialog) {
    this.categoryService.categoryListSubject.subscribe((data) => {
      this.categoryList = data;
    });
  }
  deleteCategory(category: Category) {
    const name = category.name.length >=23 ? category.name.slice(0,22) + '...' : category.name;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {message: 'Do you really want to delete ' + name + '?'},
      disableClose: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteCategory(category);
      }
    });
  }

}
