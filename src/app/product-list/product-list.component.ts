import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product-service.service';
import ProductsData from "./../../assets/data/products.json";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productes! : Product[];

 constructor(private productService : ProductService){}
 
 ngOnInit() {
  this.productService.getProducts().subscribe((prod : any)=>this.productes=prod)
  }



}
