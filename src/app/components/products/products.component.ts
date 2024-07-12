import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Produtos Cadastrados:';

  categories : Category[] = [
    {id:1, name:"Produção Própria"},
    {id:2, name:"Nacional"},
    {id:3, name:"Importado"},
    {id:4, name:"Premium"}
  ]

  product : Product = {} as Product;

  products : Product[] = [];

  saveProd() {
    this.product.id = this.products.length+1;
    this.products.push(this.product);

    console.log(this.product);
    this.product = {} as Product;

  }


  constructor() {}

  ngOnInit() : void {}
}
