import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService implements OnInit {


  private counter = new BehaviorSubject(0);
  private productInCart = new BehaviorSubject([]);


  
  counterVal =this.counter.asObservable();
  productInCartVal=this.productInCart.asObservable();


  constructor() { }
  ngOnInit() {

  }

  


cartQuant( newCounter :any){
    this.counter.next(newCounter);
}
addToCart( newProduct :any){
  this.productInCart.next(newProduct);
}
}
