import {Injectable} from '@angular/core';
const COURSE_API_URL = 'https://cs5610-summer2-2018-paarthk.herokuapp.com';
// const COURSE_API_URL = 'http://localhost:3000';
@Injectable()
export class CourseNavigatorServiceClient {
  findCourseById(courseId) {
    return fetch(COURSE_API_URL + '/api/course/' + courseId)
      .then(response => response.json());
  }

  findAllCourses() {
    return fetch(COURSE_API_URL + '/api/course')
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(COURSE_API_URL + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(moduleId) {
    return fetch(COURSE_API_URL + '/api/course/1/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllTopicsForLesson(lessonId) {
    return fetch(COURSE_API_URL + '/api/course/1/module/1/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllWidgetsForTopic(topicId) {
    return fetch(COURSE_API_URL + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
