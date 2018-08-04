import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../service/section.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = [];
  constructor(private sectionService: SectionServiceClient,
              private router: Router) { }

  enroll = sectionId => {
    this.sectionService
      .enrollStudentInSection(sectionId, sectionId)
      .then(() => this.router.navigate(['profile']));

  }

  ngOnInit() {
    this.sectionService
      .findAllSections()
      .then(sections => this.sections = sections);
  }

}
