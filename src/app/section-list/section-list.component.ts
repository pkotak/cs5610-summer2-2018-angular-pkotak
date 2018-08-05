import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../service/section.service.client';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {UserServiceClient} from '../service/user.service.client';
import {Router} from '@angular/router';
import {Section} from '../models/section.model.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-sections',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  courses = [];
  sections: Section[] = [];
  selectedCourse = {
    id: -1,
    title: ''
  };
  section: Section = new Section();
  toEnroll = true;
  user: User = new User();
  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private userService: UserServiceClient,
              private router: Router) { }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
  }

  enroll = section => {
    if (this.user.firstName === undefined) {
      alert('Please log in to enroll');
      this.router.navigate(['/login']);
    } else {
      this.sectionService
        .enrollStudentInSection(section._id, this.toEnroll)
        .then(() => {
          alert('successfully enrolled');
          return this.sectionService
            .findSectionsForCourse(this.selectedCourse.id);
        })
        .then(() => this.router.navigate(['/profile']));
    }
  }

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['home']));
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
