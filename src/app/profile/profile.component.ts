import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../service/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../service/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }
  user: User = new User();
  enrollments = [];
  toEnroll = false;
  update(user: User) {
    this.service
      .updateUser(user)
      .then(() => {
        this.service
          .profile()
          .then(updatedUser => this.user = updatedUser);
      });
  }

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['home']));
  }

  unEnroll = section => {
    this.sectionService
      .enrollStudentInSection(section._id, this.toEnroll)
      .then(() => {
        alert('successfully left the course');
        return this.sectionService
          .findSectionsForStudent()
          .then(enrollments => this.enrollments = enrollments);
      });
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);

    this.sectionService
      .findSectionsForStudent()
      .then(enrollments => this.enrollments = enrollments);
  }

}
