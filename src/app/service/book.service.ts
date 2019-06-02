import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string;
  private booksUrl: string;
  private bookAddUrl: string;
  private bookSearchUrl: string;
  private bookUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
    this.booksUrl = this.baseUrl + 'book/getAllBooks';
    this.bookAddUrl = this.baseUrl +  'book/1/book/1/category';
    this.bookSearchUrl = this.baseUrl + 'book/searchBooks/';
    this.bookUrl = this.baseUrl + 'book/book/';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public save(book: Book, author: string, category: string) {
    this.bookAddUrl = this.baseUrl + 'book/' + author + '/book/' + category + '/category';
    return this.http.post<Book>(this.bookAddUrl, book);
  }

  public search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookSearchUrl + term);
  }

  public findById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + id);
  }
}
