import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../service/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private router: Router,
              private service: UserServiceClient ) { }

  login(username, password) {
    this.service.login(username, password)
      .then(() => this.router.navigate(['/profile']));
  }

  ngOnInit() {
  }

}
