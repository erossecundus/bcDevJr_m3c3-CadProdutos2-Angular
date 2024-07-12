import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];

  getProducts() : Product[] {
    return this.products;
  }

  save(product : Product) {
    product.id = this.products.length+1;
    this.products.push(product);

    console.log("salvando" + product);
  }

  constructor() { }
}