import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {
 @Output() title = new EventEmitter<any>;
 name:string
  constructor() { 
    this.name = "I am child component";
  }

  ngOnInit(): void {
    this.title.emit('Child is passing data to Parent');
    
  }
  // onChange():void{
  //   this.title.emit('Child is passing data to Parent');
  // }

}
