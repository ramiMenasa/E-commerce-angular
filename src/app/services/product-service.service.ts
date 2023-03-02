import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getProducts() {
    return this.http.get(`https://fakestoreapi.com/products`)
  }

  getProductDetails(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
