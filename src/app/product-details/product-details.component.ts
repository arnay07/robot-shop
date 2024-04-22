import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() addToCartEvent = new EventEmitter();

  getImageUrl(product: IProduct): string {
    return !product ? '' : `/assets/images/robot-parts/${product.imageName}`;
  }

  getProductClasses(product: IProduct): string {
    if (product.discount > 0) {
      return 'strikethrough';
    }
    return '';
  }

  buyButtonClicked(): void {
    this.addToCartEvent.emit();
  }
}
