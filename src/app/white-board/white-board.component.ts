import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../service/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient) { }
  user: User = new User();
  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);
  }

}
