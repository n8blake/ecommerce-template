import { Component, Input, OnInit } from '@angular/core';
import { EProduct } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products?: EProduct[]

  constructor() { }

  ngOnInit(): void {

  }

}
