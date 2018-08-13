import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../service/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private service: QuizServiceClient) { }
  quizId = '';
  quiz = {title: '', questions: []};

  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(submission => console.log(submission))

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId']);
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
  }

}
