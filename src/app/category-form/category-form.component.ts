import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category1: Category;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category1 = new Category();
    this.updateAddButton();
  }

  onSubmit() {
    this.saveCategory();
  }

  saveCategory() {
    this.categoryService.save(this.category1).subscribe(result => this.gotoCategoryList());
  }

  gotoCategoryList() {
    this.router.navigate(['/categories']);
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Category';
      this.appComponent.addButtonRoute = '/category';
    });
  }


}
