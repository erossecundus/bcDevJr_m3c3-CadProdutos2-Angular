import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title = 'Formulário de Cadastro:';

  @Input()
  categories : Category[] = [];

  @Input()
  product ?: Product;

  save() {
    console.log(this.product)
  }

  constructor() {}

  ngOnInit() : void {}

}
