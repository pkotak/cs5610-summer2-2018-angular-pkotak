import {Injectable} from '@angular/core';
// const QUIZ_API_URL = 'http://localhost:3000';
const QUIZ_API_URL = 'https://cs5610-summer2-2018-nodejs.herokuapp.com';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(QUIZ_API_URL + '/api/quiz')
      .then(response => response.json())

  createQuiz = quiz =>
    fetch(QUIZ_API_URL + '/api/quiz', {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }})
      .then(response => response.json())

  updateQuiz = (quizId, quiz) => {};
  deleteQuiz = quizId => {};
  findQuizById = quizId =>
    fetch(QUIZ_API_URL + '/api/quiz/' + quizId)
      .then(response => response.json())

  submitQuiz = quiz =>
    fetch(QUIZ_API_URL + '/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  findSubmissionsForStudent = quizId =>
    fetch(QUIZ_API_URL + '/api/quiz/' + quizId + '/submission', {
      credentials: 'include'
    })
      .then(response => response.json())

  findSubmissionById = (submissionId, quizId) =>
    fetch(QUIZ_API_URL + '/api/quiz/' + quizId + '/submission/' + submissionId, {
      credentials: 'include'
    })
      .then(response => response.json())
}
