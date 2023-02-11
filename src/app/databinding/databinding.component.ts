import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  heading:string;
  defination:string;
  imgPath:string;
  typesOfDataBinding:any;
  rowspan:number;
  colspan:number;
  isDanger:boolean;
  isBold:boolean;
  name:string;
  constructor() {
    this.heading = "Explaining About Databinding";
    this.defination = 'Data binding in AngularJS is the synchronization between the model and the view. When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well.';
    this.imgPath = "../../assets/imgs/One-Way and Two-Way Data Binding.png";
    this.typesOfDataBinding = ['String Interpolation','Property','Attribute','Class','Event'];
    this.rowspan = 3;
    this.colspan = 3;
    this.isDanger = false;
    this.isBold = false;
    this.name = "Murali P";
   }

  ngOnInit(): void {

    console.log(this.name);
  }

  welcome(p1:string):void{
    alert(p1);
  }

}
