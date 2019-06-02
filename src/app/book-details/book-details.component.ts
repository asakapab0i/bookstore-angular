import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../model/book';
import { Author } from '../model/author';
import { Category } from '../model/category';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  author: Author;
  category: Category;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.bookService.findById(id).subscribe(data => {
          this.book = data;
          this.author = data.author;
          this.category = data.category;
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }

  getAuthorName() {
    return this.author.first_name + ' ' + this.author.last_name;
  }

}
