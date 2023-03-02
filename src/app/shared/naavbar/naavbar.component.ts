import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartCounterService } from '../../services/cart-counter.service';

@Component({
  selector: 'app-naavbar',
  templateUrl: './naavbar.component.html',
  styleUrls: ['./naavbar.component.css']
})
export class NaavbarComponent implements OnInit{
  counter : number=0;
  cart=faCartShopping;
  constructor(private cartCounter :CartCounterService) { }

  ngOnInit() {
    this.cartCounter.counterVal.subscribe((count)=> this.counter =count)
  }

}
