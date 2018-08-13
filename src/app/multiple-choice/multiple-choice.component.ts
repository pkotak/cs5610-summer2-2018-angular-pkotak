import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() question;
  constructor() { }

  setMcqAnswer(answer) {
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(answer);
  }

  ngOnInit() {
  }

}
