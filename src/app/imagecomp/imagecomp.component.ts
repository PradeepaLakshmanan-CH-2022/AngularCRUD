import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagecomp',
  templateUrl: './imagecomp.component.html',
  styleUrls: ['./imagecomp.component.css']
})
export class ImagecompComponent {
  constructor(private router:Router){}
  private isAuthenticated: boolean = false;
  logout(){
  this.isAuthenticated = false;
  sessionStorage.clear();
  localStorage.removeItem('sessionId');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userType');
  this.router.navigate(['/login']);
  }
}
