import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/products';

const api = 'https://localhost:7254/api/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  controller = api + "products/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.controller);
  }
}
