import { Injectable } from '@angular/core';
import { EProduct, ECategory } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): EProduct[] {
    return PRODUCTS;
  }

  // getProduct(id: number): EProduct {
  //   return PRODUCTS.filter(product => product.id === id)
  // }

  

}


const PRODUCTS: EProduct[] = [
  {
    id: 1,
    name: 'Briefcase',
    description: 'A quality black, leather portfolio. A flat, rectangular case with a handle, often of leather, for carrying books, papers, etc.',
    imageUrl: '/assets/images/briefcase.png',
    price: 50,
    categories: [
      {
        id: 1,
        name: 'organization'
      }
    ]
  },
  {
    id: 2,
    name: 'Calculator',
    description: 'Digital single-line calculator for math. A small device that performs calculations, requiring manual action for each individual operation.',
    imageUrl: '/assets/images/calculator.png',
    price: 12,
    categories: [
      {
        id: 2,
        name: 'electronics'
      }
    ]
  },
  {
    id: 3,
    name: 'Laptop',
    description: 'On-the-go work machine. A portable computer, usually battery-powered, small enough to rest on the user\'s lap and having a screen that closes over the keyboard like a lid.',
    imageUrl: '/assets/images/laptop.png',
    price: 800,
    categories: [
      {
        id: 2,
        name: 'electronics'
      }
    ]
  },
  {
    id: 4,
    name: 'Planner',
    description: 'A quality brown, leather wallet and day planner. A flat, folding pocketbook, large enough to hold paper money abd credit cards. Includes 12 month day planner for keeping track of your schedule.',
    imageUrl: '/assets/images/planner_wallet.png',
    price: 20,
    categories: [
      {
        id: 1,
        name: 'organization'
      }
    ]
  },
  {
    id: 5,
    name: 'Tablet',
    description: 'A very thin, portable computer, battery-powered, and has a touchscreen as the primary interface and input device.',
    imageUrl: '/assets/images/tablet.png',
    price: 500,
    categories: [
      {
        id: 2,
        name: 'electronics'
      }
    ]
  },
  {
    id: 6,
    name: 'Aluminum Watch',
    description: 'A small portable timepiece. Made from high grade aluminum with a brushed finish. Perfect for keeping you on time.',
    imageUrl: '/assets/images/watch_silver.png',
    price: 300,
    categories: [
      {
        id: 3,
        name: 'watch'
      }
    ]
  },
  {
    id: 7,
    name: 'Leather Watch',
    description: 'A small portable timepiece. Frame made from high grade aluminum with a dark brown leather band. Perfect for keeping you on time.',
    imageUrl: '/assets/images/watch_leather.png',
    price: 95,
    categories: [
      {
        id: 3,
        name: 'watch'
      }
    ]
  }
]