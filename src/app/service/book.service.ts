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

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/book/getAllBooks';
    this.bookAddUrl = 'http://localhost:8080/book/1/book/1/category';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public save(book: Book){
    return this.http.post<Book>(this.bookAddUrl, book);
  }
}
