import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem } from './catalog/line-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ILineItem[] = [];

  constructor() {}

  totalPrice(): number {
    return (
      Math.round(
        this.cart.reduce((acc, item) => {
          return (
            acc + item.product.price * (1 - item.product.discount) * item.qty
          );
        }, 0) * 100
      ) / 100
    );
  }

  findItem(product: IProduct): ILineItem | undefined {
    return this.cart.find((item) => item.product.id === product.id);
  }

  add(product: IProduct): void {
    const item = this.findItem(product);
    if (item) {
      item.qty++;
    } else {
      this.cart.push({ product, qty: 1 });
    }
  }
}
