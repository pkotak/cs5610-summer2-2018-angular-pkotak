import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../service/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) {}
  quizId = '';
  submissions = [];
  submission = {};
  questionAnswer = [];
  finalStudentScore = 0;
  finalQuizScore = 0;

  findSubmissionsForStudent = quizId => {
    this.service.findSubmissionsForStudent(quizId)
      .then(submissions => {
        this.submissions = submissions;
      });
  }

  showSubmission = (submissionId) => {
    this.service.findSubmissionById(submissionId, this.quizId)
      .then(submission => this.submission = submission)
      .then(() => this.populateQuestionAnswer(this.submission));
  }

  createAnswerMap = (answer, question) => {
    switch (question.questionType) {
      case 'FILL_BLANKS':
        const keys = Object.keys(answer.fillBlanksAnswer);
        let userAnsArr = [];
        let correctAnsArr = [];
        keys.map(key => {
          userAnsArr.push(answer.fillBlanksAnswer[key]);
        });
        question.blanks.map(blank => {
          if (blank.indexOf('*') === 0) {
            correctAnsArr.push(blank.split('=')[1]);
          }
        });
        return {
          userAnswer: userAnsArr,
          correctAnswer: correctAnsArr,
          points: (userAnsArr.length === correctAnsArr.length) ? question.points : 0};
      case 'CHOICE':
        let correctAns = '';
        question.choices.map(choice => {
          if (choice.correct === true) {
            correctAns = choice.text;
            return;
          }
        });
        return {
          userAnswer: question.choices[answer.multipleChoiceAnswer].text,
          correctAnswer: correctAns,
          points: (question.choices[answer.multipleChoiceAnswer].text === correctAns) ? question.points : 0};
      case 'ESSAY':
        return {
          userAnswer: answer.essayAnswer,
          correctAnswer: question.answer,
          points: (question.answer === answer.essayAnswer) ? question.points : 0};
      case 'TRUE_FALSE':
        const ans = {
          userAnswer: answer.trueFalseAnswer,
          correctAnswer: question.isTrue,
          points: (answer.trueFalseAnswer === question.isTrue) ? question.points : 0
        };
        return ans;
    }
  }

  populateQuestionAnswer = submission => {
    this.questionAnswer = [];
    this.finalStudentScore = 0;
    this.finalQuizScore = 0;
    submission.answers.map((answer, index) => {
      const answerMap = this.createAnswerMap(answer, submission.quiz.questions[index]);
      this.questionAnswer.push({
        question: submission.quiz.questions[index],
        userAnswer: answerMap.userAnswer,
        correctAnswer: answerMap.correctAnswer,
        totalPoints: submission.quiz.questions[index].points,
        scoredPoints: answerMap.points
      });
      this.finalStudentScore += answerMap.points;
      this.finalQuizScore += submission.quiz.questions[index].points;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.findSubmissionsForStudent(this.quizId);
    });
  }

}
