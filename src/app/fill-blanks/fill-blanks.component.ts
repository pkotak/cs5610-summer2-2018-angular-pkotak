import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fill-blanks',
  templateUrl: './fill-blanks.component.html',
  styleUrls: ['./fill-blanks.component.css']
})
export class FillBlanksComponent implements OnInit {

  @Input() question;
  constructor() { }

  ngOnInit() {
    this.question.fillBlanksAnswer = {};
  }

}
