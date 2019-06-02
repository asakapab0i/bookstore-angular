import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'book', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'author', component: AuthorFormComponent },
  { path: 'author/:id', component: AuthorDetailsComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category', component: CategoryFormComponent },
  { path: 'category/:id', component: CategoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
