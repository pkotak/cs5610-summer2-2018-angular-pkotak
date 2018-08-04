import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  createSection = section =>
    fetch('http://localhost:3000/api/course/' + section.courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json())

  findSectionsForStudent = () =>
    fetch('http://localhost:3000/api/student/section', {
      credentials: 'include'
    })
      .then(response => response.json())

  findSectionById = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId)
      .then(section => section.json())

  updateSection = section =>
    fetch('http://localhost:3000/api/section/' + section._id, {
      method: 'put',
      body: JSON.stringify(section),
      headers: {
        'content-type' : 'application/json'
      }
    })
      .then(updatedSection => updatedSection.json())

  deleteSection = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId, {
      method: 'delete'
    }).then(response => response.text())

  enrollStudentInSection = (sectionId, toEnroll) =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enrollment', {
      method: 'post',
      body: JSON.stringify({toEnroll: toEnroll}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
}
