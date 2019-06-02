import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';
import { Book } from '../model/book'
import { Author } from '../model/author';
import { Category } from '../model/category';
import { AuthorService } from '../service/author.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;
  authors: Author[];
  categories: Category[];

  author: string;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.book = new Book();
    this.getAuthors();
    this.getCategories();
  }

  onSubmit() {
    this.saveBook(this.book, this.author, this.category);
  }

  saveBook(book: Book, author: string, category: string) {
    this.bookService.save(this.book, author, category).subscribe(result => this.gotoBookList());
  }

  getAuthors() {
    this.authorService.findAll().subscribe(data => {
      this.authors = data;
    });
  }

  getCategories() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }
}
