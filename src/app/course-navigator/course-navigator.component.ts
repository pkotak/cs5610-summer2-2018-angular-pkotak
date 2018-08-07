import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../service/user.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient,
              private userService: UserServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.setCourseDetails();
  }
  course = {courseId: '', title: ''};
  user: User = new User();

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.course.courseId = params['courseId'];
    });

    this.service.findCourseById(this.course.courseId)
      .then(course => this.course.title = course.title);
  }

  //
  // setTopicDetails() {
  //   this.activatedRoute.params.subscribe((params: Params) => {
  //     this.selectedTopic = params['topicId'];
  //     if (this.selectedTopic !== undefined) {
  //       this.service.findAllWidgetsForTopic(this.selectedTopic)
  //         .then(widgets => this.widgets = widgets);
  //     }
  //   });
  // }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);

    this.service.findCourseById(this.course.courseId)
      .then(course => this.course = course);
  }

}
