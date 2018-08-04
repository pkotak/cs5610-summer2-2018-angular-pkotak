import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../service/section.service.client';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {UserServiceClient} from '../service/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  courses = [];
  sections = [];
  selectedCourse = {
    id: -1,
    title: ''
  };
  section = {name: '', seats: ''};
  toEnroll = true;
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

  addSection = section => {
    section.courseId = this.selectedCourse.id;
    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  }

  enroll = section => {
    this.sectionService
      .enrollStudentInSection(section._id, this.toEnroll)
      .then(() => {
        alert('successfully enrolled');
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse.id);
      })
      .then(() => this.router.navigate(['/profile']));
  }

  deleteSection = section => {
    const sectionId = section._id;
    const courseId = section.courseId;
    this.sectionService
      .deleteSection(sectionId)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(courseId);
      })
      .then(sections => this.sections = sections);
  }

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['home']));
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
