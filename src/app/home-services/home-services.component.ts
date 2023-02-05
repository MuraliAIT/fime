import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {
 heading:string;
 services:any;
  constructor() {
    this.heading = "Our Services";
    this.services = [
      {
        title:'Fime Academy',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      },
      {
        title:'Payments advisory',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      },
      {
        title:'Compliance and risk',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      },
      {
        title:'Operational effectiveness',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      },
      {
        title:'Lab outsourcing',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      },
      {
        title:'Test strategy',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'
      }
    ]
   }

  ngOnInit(): void {
  }

}
