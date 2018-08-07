import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-lesson-tab',
  templateUrl: './lesson-tab.component.html',
  styleUrls: ['./lesson-tab.component.css']
})
export class LessonTabComponent implements OnInit {

  moduleId;
  courseId;
  lessonId;
  lessons = [];
  constructor(private service: CourseNavigatorServiceClient,
              private activatedRoute: ActivatedRoute) {}

  setModuleDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      if (this.moduleId !== undefined) {
        this.service.findAllLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

  ngOnInit() {
    this.setModuleDetails();
  }

}
