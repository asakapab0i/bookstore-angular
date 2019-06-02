import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  search: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  doSearch(search: string) {
    if (search === '') {
      this.getAllBooks();
    } else {
      return this.searchBooks(search);
    }
  }

  getAllBooks(){
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }

  searchBooks(search: string){
    this.bookService.search(search).subscribe(data => {
      this.books = data;
    });
  }

}
