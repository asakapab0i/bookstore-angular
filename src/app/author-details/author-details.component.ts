import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location,
    private appComponent: AppComponent) { }

  ngOnInit() {
    this.updateAddButton();
    this.getParams();
  }

  getParams() {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.getAuthorById(id);
      }
    });
  }

  getAuthorById(id: number) {
    this.authorService.findById(id).subscribe(data => {
      this.author = data;
    });
  }

  goBack() {
    this.location.back();
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Author';
      this.appComponent.addButtonRoute = '/author';
    });
  }

}
