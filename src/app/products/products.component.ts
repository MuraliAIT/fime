import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../api/product.service';
import { ChildtoparentComponent } from '../childtoparent/childtoparent.component';
import Product from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  crickters:any;
  products:any;
  apiProducts: Product[] = [];
  ps;
  title:any;
  @ViewChild(ChildtoparentComponent, { static: true })
  child!: ChildtoparentComponent;
  constructor() {
    this.crickters = ['Virat','Rohit','Jadeja'];
    this.products = [
      {
        name:'Macbook Air 1',
        imgName:'m2.avif',
        desc:"MacBook Air 1, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.",
        originalPrice:345678,
        dicountedPrice:23456
      },
      {
        name:'Macbook Air 2',
        imgName:'m3.avif',
        desc:"MacBook Air 2, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.",
        originalPrice:345678,
        dicountedPrice:23456
      },
      {
        name:'Macbook Air 3',
        imgName:'m4.avif',
        desc:"MacBook Air 3, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.",
        originalPrice:345678,
        dicountedPrice:23456
      },
      {
        name:'Macbook Air 4',
        imgName:'m5.avif',
        desc:"MacBook Air 4, MacBook Pro 13″, and introducing the new MacBook Pro 14″ and 16″. Learn more. Incredible power. Incredibly simple. What makes a Mac a Mac? Learn more. Services: No-contact free delivery, EMI available, Shop with Specialists.",
        originalPrice:345678,
        dicountedPrice:23456
      }
    ]

    this.ps = new ProductService();
   }

  ngOnInit(): void {
    console.log(this.child.name); 
    this.apiProducts = this.ps.getAllProducts()
    console.log(this.apiProducts)
  }
  onChange(value:any): void{
    this.title = value;
  }

}
