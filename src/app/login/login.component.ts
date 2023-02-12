import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean;
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      pwd:["",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
    });
    this.submitted = false;
  }
  get f(){
    return this.loginForm.controls
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.submitted = true;
    console.log(this.loginForm)
  }

}
