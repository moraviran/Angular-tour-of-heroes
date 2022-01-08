import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService, private http: HttpClient) {
    this.items = this.cartService.getItems();
  }

  }

  ngOnInit(): void {}
}
