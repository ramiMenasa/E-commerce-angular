import { Component } from '@angular/core';
import { Product } from '../model/product';
import { CartCounterService } from '../services/cart-counter.service';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  oneProduct: Product = {
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
    "overAllPrice": 0
  };
  total: number = 0;
  productes!: Product[];
  counter: number = 0;
  allQuantity : number =0;
  constructor(private cartCounter: CartCounterService) {
  }

  ngOnInit() {


    this.cartCounter.productInCartVal.subscribe((prod) => (this.productes = prod));
    this.cartCounter.counterVal.subscribe((cnt) => this.counter = cnt)

    
    this.calTotal();  
  


  }
  calTotal(){
    this.cartCounter.productInCartVal.subscribe((prod) => (this.productes = prod));
    this.total=0;
  for (const prod of this.productes) {
    prod.overAllPrice = prod.price * prod.quantity;
    this.total += prod.overAllPrice;
  }
  }


  removeProduct(id: number) {
    const productindex = this.productes.findIndex(obj => obj.id == id)
    if (productindex > -1) {
      this.productes.splice(productindex, 1);
    }
    console.log(this.productes);
    this.calTotal();

  }
  increaseQuantity(id: number) {
    const productindex = this.productes.findIndex(obj => obj.id == id)
    this.productes[productindex].quantity++;
    for (let i = 1; i < this.productes.length; i++) {
      this.allQuantity = this.productes[i-1].quantity+this.productes[i].quantity ;
      
    }
    this.counter=this.allQuantity;
    this.cartCounter.cartQuant(this.counter)
    this.calTotal();

  }
  decreaseQuantity(id: number) {
    const productindex = this.productes.findIndex(obj => obj.id == id)
    this.productes[productindex].quantity--;
    for (let i = 1; i < this.productes.length; i++) {
      this.allQuantity = this.productes[i-1].quantity+this.productes[i].quantity ;
      
    }
    this.counter=this.allQuantity;
    this.cartCounter.cartQuant(this.counter)

    if (this.productes[productindex].quantity <= 0) {
      this.productes.splice(productindex, 1);
    }
    this.calTotal();
    
  }

}