import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product) =>
            !product ||
            product.category.toLowerCase() === this.filter.toLowerCase()
        );
  }

  addToCart(product: IProduct): void {
    this.cartService.add(product);
    console.log('Added to cart:', product.name);
  }
}
