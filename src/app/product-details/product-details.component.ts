import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../model/product";
import { ProductService } from '../services/product-service.service';
import ProductsData from "./../../assets/data/products.json";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{

  product: Product | any  = {
    "createdAt": "",
    "title": "",
    "image": "",
    "rate": 0,
    "count": 0,
    "description": "",
    "price": 0.00,
    "reviews": [],
    "id": 0
  };
  constructor(private activatedRoute: ActivatedRoute,private productService : ProductService) {
  }

  ngOnInit() {

    this.productService.getProductDetails(this.activatedRoute.snapshot.params['id']).subscribe(res=>this.product=res)

    // this.product = ProductsData.find(
    //   (product:Product)=>product.id == this.activatedRoute.snapshot.params['id']
    // );
  }
}
