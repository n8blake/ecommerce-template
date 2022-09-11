import { Injectable } from '@angular/core';
import { EProduct } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: EProduct[] = []

  constructor() { }

  getCartItems(): EProduct[] {
    return this.cartItems;
  }

  addItemToCart(item: EProduct): void {

  }

  removeItemFromCart(index: number): void {
    
  }

}