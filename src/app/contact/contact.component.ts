import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model:any;
  submitted:boolean;
  constructor() {
    this.submitted = false;
    this.model = {};
   }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.model);
  }

}
