import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';
import { Book } from '../model/book'
import { Category } from '../model/category';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book: Book;
  authors: Author[];
  categories: Category[];

  author: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService) {
    this.book = new Book();
    this.getAuthors();
  }

  onSubmit() {
    this.saveBook(this.book, this.author);
  }

  saveBook(book: Book, author: string) {
    this.bookService.save(this.book, author).subscribe(result => this.gotoBookList());
  }

  getAuthors() {
    this.authorService.findAll().subscribe(data => {
      this.authors = data;
    });
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }
}
