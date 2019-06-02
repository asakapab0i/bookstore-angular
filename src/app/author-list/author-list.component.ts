import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[]
  search: string;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
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

}
