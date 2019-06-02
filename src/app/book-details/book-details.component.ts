import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.bookService.findById(id).subscribe(data => {
          this.book = data;
        });
      }
    });
  }

}
