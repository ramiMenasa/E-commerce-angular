import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() oneProduct: Product = {
    "title": "",
    "image": "",
    "description": "",
    "price": 0.00,
    "id": 0,
    "category": "",
    "rating": {
      "rate": 0,
      "count": 0
    },
    "quantity": 0,
    "overAllPrice":0

  };
  products: Array<Product> = [];
  counter: number = 0;

  constructor(private cartCounter: CartCounterService) {

  }
  ngOnInit(): void {
    
    this.cartCounter.productInCartVal.subscribe((prod) => (this.products = prod))
  }



  addProductToCart(id: number) {
    const product = this.products.findIndex(product => product.id == id);
    console.log(product);
    this.oneProduct.quantity = 1;
    
    if (product != -1) {
      this.products[product].quantity++;
    }
    else {
      
      this.products.push(this.oneProduct);   
      this.cartCounter.addToCart(this.products);
    }
    this.cartCounter.counterVal.subscribe((cnt)=>this.counter=cnt)

      this.counter += this.oneProduct.quantity;      
  
  this.cartCounter.cartQuant(this.counter)
  }
}
