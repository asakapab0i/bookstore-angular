import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string;
  categoriesUrl: string;
  categoriesSearch: string;
  categoryByIdUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
    this.categoriesUrl = this.baseUrl + 'category/getAllCategories';
    this.categoriesSearch = this.baseUrl + 'category/search/';
    this.categoryByIdUrl = this.baseUrl + 'category/category/';
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  public searchCategories(term: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesSearch + term);
  }

  public findById(id: number): Observable<Category>{
    return this.http.get<Category>(this.categoryByIdUrl + id);
  }
}
