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
              private activatedRoute: ActivatedRoute) { }
  course = {courseId: '', name: ''};
  selectedModule;
  selectedLesson;
  selectedTopic;
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];
  user: User = new User();

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.course.courseId = params['courseId'];
    });

    this.service.findCourseById(this.course.courseId)
      .then(course => this.course.name = course.title);
  }

  setModuleDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedModule = params['moduleId'];
      if (this.selectedModule !== undefined) {
        this.service.findAllLessonsForModule(this.selectedModule)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

  setLessonDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedLesson = params['lessonId'];
      if (this.selectedLesson !== undefined) {
        this.service.findAllTopicsForLesson(this.selectedLesson)
          .then(topics => this.topics = topics);
      }
    });
  }

  setTopicDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedTopic = params['topicId'];
      if (this.selectedTopic !== undefined) {
        this.service.findAllWidgetsForTopic(this.selectedTopic)
          .then(widgets => this.widgets = widgets);
      }
    });
  }

  ngOnInit() {
    this.setCourseDetails();

    this.setModuleDetails();

    this.setLessonDetails();

    this.setTopicDetails();

    this.userService
      .profile()
      .then(user => this.user = user);

    this.service.findAllModulesForCourse(this.course.courseId)
      .then(modules => this.modules = modules);
  }

}
