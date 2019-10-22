import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = AppConfig.API_ENDPOINT + '/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + id);
  }

  removeProduct(id: number): Observable<{}> {
    return this.http.delete(this.productsUrl + '/' + id, this.httpOptions);
  }

  editProduct(id: number, editedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.productsUrl + '/' + id, editedProduct, this.httpOptions);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }
}
