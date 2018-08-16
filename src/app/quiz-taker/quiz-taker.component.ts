import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../service/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private service: QuizServiceClient) { }
  quizId = '';
  quiz = {title: '', questions: []};

  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(submission => {
        if (submission) {
          alert('Submitted');
          this.router.navigate(['quiz/' + this.quizId + '/submissions']);
        }
      })

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId']);
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
  }

}
