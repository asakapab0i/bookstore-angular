import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  search: string;

  constructor(
    private appComponent: AppComponent,
    private categoryService: CategoryService,
    private location: Location) { }

  ngOnInit() {
    this.updateAddButton();
    this.getCategories();
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Category';
      this.appComponent.addButtonRoute = '/category';
    });
  }

  getCategories() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  doSearch(search: string) {
    if (search === '') {
      this.getCategories();
    } else {
      return this.searchCategories(search);
    }
  }

  searchCategories(search: string) {
    this.categoryService.searchCategories(search).subscribe(data => {
      this.categories = data;
    });
  }

}
