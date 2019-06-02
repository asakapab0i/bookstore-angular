import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.updateAddButton();
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Category';
      this.appComponent.addButtonRoute = '/category';
    });
  }

}
