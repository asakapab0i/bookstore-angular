import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../model/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl: string;
  authorsUrl: string;
  authorSearchUrl: string;
  authorAddUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
    this.authorsUrl = this.baseUrl + 'author/getAllAuthors';
    this.authorSearchUrl = this.baseUrl + 'author/search/';
    this.authorAddUrl = this.baseUrl + 'author/author';
  }

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

  public search(term: string): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorSearchUrl + term);
  }

  public findById(id: number): Observable<Author> {
    return this.http.get<Author>(this.baseUrl + 'author/author/' + id);
  }

  public save(author: Author) {
    return this.http.post<Author>(this.authorAddUrl, author);
  }
}
