import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'create-book', component: FormComponent},
  {path: 'books', component: BooksComponent},
  {path: '', redirectTo: 'create-book', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
