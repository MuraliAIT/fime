import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  crickters:any;
  products:any;
  title:any;
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
   }

  ngOnInit(): void {
  }
  onChange(value:any): void{
    this.title = value;
  }

}
