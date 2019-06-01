import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl: string;
  private bookAddUrl: string;
  private bookSearchUrl: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/book/getAllBooks';
    this.bookAddUrl = 'http://localhost:8080/book/1/book/1/category';
    this.bookSearchUrl = 'http://localhost:8080/book/searchBooks/';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public save(book: Book){
    return this.http.post<Book>(this.bookAddUrl, book);
  }

  public search(term: string) {
    return this.http.get<Book[]>(this.bookSearchUrl + term);
  }
}
