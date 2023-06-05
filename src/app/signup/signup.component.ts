import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { StudentServiceService } from '../student-service.service';
import { Toast} from 'ngx-toastr';

import swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  public signUpForm !: FormGroup;
  public signupObj = new User();
  constructor(private fb :FormBuilder,private router : Router, private api: StudentServiceService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:["", Validators.required],
      mobile:["",Validators.required],
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required],
    
    })
  }

  signUp(){
  this.signupObj.userName = this.signUpForm.value.fullname;
  this.signupObj. emailAddress= this.signUpForm.value.username;
  this.signupObj.password= this.signUpForm.value.password;
 
  this.signupObj.mobileNumber= this.signUpForm.value.mobile
  this.api.signUp(this.signupObj)
  .subscribe(res=>{
 
    this.signUpForm.reset();
    this.router.navigate(['login']);

  
  })
}
}