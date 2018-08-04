import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient,
              private activatedRoute: ActivatedRoute) { }
  courseId;
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];

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
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
    });
    this.service.findAllModulesForCourse(this.courseId)
      .then(modules => this.modules = modules);
  }

}
