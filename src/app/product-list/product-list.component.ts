import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/products';
import { ProductsService } from '../services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.products = data);
  }
}
