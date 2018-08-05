import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../service/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseNavigatorServiceClient} from '../service/course-navigator.service.client';
import {Section} from '../models/section.model.client';

@Component({
  selector: 'app-admin-section-list',
  templateUrl: './admin-section-list.component.html',
  styleUrls: ['./admin-section-list.component.css']
})
export class AdminSectionListComponent implements OnInit {
  constructor(private service: SectionServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.loadSections(params['courseId']
      ));
  }

  sections: Section[];
  section: Section = new Section();
  loadSections(courseId) {
    this.section.courseId = courseId;
    this.courseService.findCourseById(courseId)
      .then(course => {
        if (course.status !== 400) {
          this.section.name = course.title + ' Section 1';
        }});
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections;
      });
  }

  createSection() {
    this
      .service
      .createSection(this.section)
      .then(() => {
        this.loadSections(this.section.courseId);
      });
  }

  deleteSection(sectionId) {
    this.service.deleteSection(sectionId)
      .then(() => {
        this.loadSections(this.section.courseId);
      });
  }

  updateSection() {
    this.service.updateSection(this.section)
      .then(() => {
        this.loadSections(this.section.courseId);
      });
  }

  setSection(sectionName, seats, maxSeats, sectionId) {
    this.section._id = sectionId;
    this.section.name = sectionName;
    this.section.seats = seats;
    this.section.maxSeats = maxSeats;
  }

  ngOnInit() {
  }

}
