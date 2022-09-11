import { Component,  OnInit } from '@angular/core';
import { EProduct } from 'src/app/products/product.model';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products?: EProduct[]
  visibleProducts?: EProduct[]
  searchTerm: string = ""

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.visibleProducts = this.products
  }

  searchProducts(searchTerm: string): void {
    console.log(searchTerm);
      let term = searchTerm.toLocaleLowerCase();
      let results = this.products?.filter(product => {
        return product.name.toLocaleLowerCase().indexOf(term) > -1
      })
      this.visibleProducts = results;
  }

}
