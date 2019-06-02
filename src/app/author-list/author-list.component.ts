import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];
  search: string;

  constructor(
    private authorService: AuthorService,
    private appComponent: AppComponent) { }

  ngOnInit() {
    this.getAuthors();
    this.updateAddButton();
  }

  doSearch(search: string) {
    if (search === '') {
      this.getAuthors();
    } else {
      return this.searchAuthor(search);
    }
  }

  getAuthors() {
    this.authorService.findAll().subscribe(data => {
      this.authors = data;
    });
  }

  searchAuthor(search: string) {
    this.authorService.search(this.search).subscribe(data => {
      this.authors = data;
    });
  }

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Author';
      this.appComponent.addButtonRoute = '/author';
    });
  }

}
