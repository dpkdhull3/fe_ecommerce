import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/features/search/services/search.service';
import { IProduct } from '../../interfaces/product.interface';
import { ProductCRUDService } from '../../services/product-crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Array<IProduct> = [];
  public searchTerm: string = "sqs";
  constructor(
    private productCRUDService: ProductCRUDService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.productCRUDService.fetchAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  public addProducts() {
    this.router.navigate(['products', 'add']);
  }

  public search(): void {
    this.searchService.searchProducts(this.searchTerm).subscribe(products => {
      console.error("products from search",products)
      this.products = products;
    });
  }
}
