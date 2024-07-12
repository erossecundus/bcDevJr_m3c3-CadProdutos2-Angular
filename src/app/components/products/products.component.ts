import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Produtos Cadastrados:';

  categories : Category[] = [];

  product : Product = {} as Product;
  products : Product[] = [];

  constructor(private categoryService : CategoryService,
              private productService : ProductService) {}

  ngOnInit() : void {
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
  }

  saveProduct() {
    this.productService.save(this.product);
    this.product = {} as Product;
    
    console.log("salvou?");
  }
}
