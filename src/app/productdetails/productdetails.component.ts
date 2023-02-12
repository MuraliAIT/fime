import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product_id:any;
  constructor(private actRoute: ActivatedRoute) { 
    this.product_id = this.actRoute.snapshot.params['id'];
    //console.log(this.product_id);
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.product_id = params.get('id')!;
    });
  }


}
