import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { Author } from '../model/author';
import { Category } from '../model/category';
import { AuthorService } from '../service/author.service';
import { CategoryService } from '../service/category.service';
import { AppComponent } from '../app.component';

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
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.updateAddButton();
    this.book = new Book();
    this.getAuthors();
    this.getCategories();
  }

  onSubmit() {
    this.saveBook();
  }

  saveBook() {
    this.bookService.save(this.book, this.author, this.category).subscribe(result => this.gotoBookList());
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

  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Book';
      this.appComponent.addButtonRoute = '/book';
    });
  }
}
