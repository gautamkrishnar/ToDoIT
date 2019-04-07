import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { FloatingButtonComponent } from './shared/components/floating-button/floating-button.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DetailsComponent,
    AboutComponent,
    ListComponent,
    FloatingButtonComponent,
    AddTodoComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
