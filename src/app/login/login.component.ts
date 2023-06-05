import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { StudentServiceService } from '../student-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordIncorrect: boolean = false;
  username?: string;
  isLoggedIn: boolean = false;
  public loginForm!: FormGroup;
  public loginObj = new User();
  sessionId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: StudentServiceService,
     // Inject the AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required]
    });
    sessionStorage.clear();
  }

  login() {
    this.loginObj.emailAddress = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;
    this.api.login(this.loginObj).subscribe(
      res => {
        this.username = res.userName;
        this.isLoggedIn = true;
        this.sessionId = res.sessionId;

        localStorage.setItem('sessionId', this.sessionId);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userType', res.userType);

        Swal.fire(
          'Welcome ' + this.username,
          'You logged successful',
          'success'
        );
        // this.authService.login(); // Call the login method of AuthService
        this.router.navigate(['image']);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userType', res.userType);
      },
      err => {
        if (err.status === 401) {
          this.passwordIncorrect = true;
        }
      }
    );
  }

 
}
