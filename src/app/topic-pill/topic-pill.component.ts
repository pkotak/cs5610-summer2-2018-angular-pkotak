import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pill.component.html',
  styleUrls: ['./topic-pill.component.css']
})
export class TopicPillComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  constructor(private service: CourseNavigatorServiceClient,
              private activatedRoute: ActivatedRoute) { }

  setLessonDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      this.topicId = params['topicId'];

      if (this.lessonId !== undefined) {
        this.service.findAllTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

  ngOnInit() {
    this.setLessonDetails();
  }

}
