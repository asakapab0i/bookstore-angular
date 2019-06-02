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

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
    this.authorsUrl = this.baseUrl + 'author/getAllAuthors';
  }

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }
}
