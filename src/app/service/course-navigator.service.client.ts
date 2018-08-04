import {Injectable} from '@angular/core';

@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(moduleId) {
    return fetch('http://localhost:8080/api/course/1/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllTopicsForLesson(lessonId) {
    return fetch('http://localhost:8080/api/course/1/module/1/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllWidgetsForTopic(topicId) {
    return fetch('http://localhost:8080/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
