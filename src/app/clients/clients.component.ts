import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
UserService
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  users:any=[];
  errorMessage:any="";
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.getAllUsers().subscribe(
      (response)=>{
        this.users = response;
        console.log(this.users)
      },
      (error)=>{
        this.errorMessage = error;
        console.log(this.errorMessage);
      },
      () =>{
        console.log("My request is completed");
      }
    )
  }

}
