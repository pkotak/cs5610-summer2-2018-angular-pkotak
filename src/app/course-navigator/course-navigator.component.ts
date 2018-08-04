import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }

  courses = [];
  selectedCourseId;
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  selectModule(moduleId) {
    this.service.findAllLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);
  }

  selectLesson(lessonId) {
    this.service.findAllTopicsForLesson(lessonId)
      .then(topics => this.topics = topics);
  }

  selectTopic(topicId) {
    this.service.findAllWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
