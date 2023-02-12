import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildtoparentComponent } from '../childtoparent/childtoparent.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild(ChildtoparentComponent, { static: true })
  child!: ChildtoparentComponent;
  constructor() { }

  ngOnInit(): void {
    console.log(this.child.name)
  }
  onChange(value:string):void{
    console.log(value);
  }

}
