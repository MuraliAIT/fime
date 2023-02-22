import { Injectable } from '@angular/core';
import Product from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  getAllProducts(){
    let listOfProducts:Product[];
    listOfProducts = [
      new Product('Macbook Air 1','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 2','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 3','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 4','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 5','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 6','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 7','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456),
      new Product('Macbook Air 8','m2.avif','MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.',345678,23456)
    ]
  
    return listOfProducts;
  }

}


