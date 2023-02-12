import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parenttochild',
  templateUrl: './parenttochild.component.html',
  styleUrls: ['./parenttochild.component.css']
})
export class ParenttochildComponent implements OnInit {
  @Input() products: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
