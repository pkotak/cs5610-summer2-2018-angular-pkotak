import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../service/quiz.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];
  constructor(private service: QuizServiceClient) { }

  loadQuizzes() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

  ngOnInit() {
    this.loadQuizzes();
  }

}
