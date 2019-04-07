import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddTodoComponent },
  { path: 'add-category', component: AddCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
