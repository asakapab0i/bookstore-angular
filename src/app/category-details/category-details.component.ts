import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from '../app.component';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  category: Category;
  id: number;

  constructor(
    private appComponent: AppComponent,
    private location: Location,
    private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateAddButton();
    this.getParams();
  }

  getParams() {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.getCategoryById(id);
      }
    });
  }

  getCategoryById(id: number){
    this.categoryService.findById(id).subscribe(data => {
      this.category = data;
    });
  }

  goBack() {
    this.location.back();
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Category';
      this.appComponent.addButtonRoute = '/category';
    });
  }

}
