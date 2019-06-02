import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  addButtonLabel: string;
  addButtonRoute: string;

  constructor() {
    this.title = 'Spring Book - Angular Application';
    this.updateAddButton('Book', '/book');
  }

  updateAddButton(label: string, route: string) {
    setTimeout(() => {
      this.addButtonLabel = 'Book';
      this.addButtonRoute = '/book';
    });
  }
}
