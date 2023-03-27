import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  private router: Router
  user:  {
    name: string,
    password: string,
    email: string,
    address: string,
  }

  constructor(r: Router) {
    this.router = r
    this.user = {
      name: '',
      email: '',
      address: '',
      password: '',
    }
  }

  submission() {
    console.log(this.user)
  }

  toHome() {
    this.router.navigate(['/home'])
  }

}
