import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userlogin = {
    username: '',
    password: ''
  }
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.error = '';
    this.loading = true;
    this.auth.login(this.userlogin).subscribe(
      success => {
        this.loading = false;
        if(success) {
          this.router.navigate(['/clients']);
        } else {
          this.error = "Bad Credentials";
        }
      }
    );
  }

}
