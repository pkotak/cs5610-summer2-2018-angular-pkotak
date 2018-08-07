import {Injectable} from '@angular/core';
const SECTION_API_URL = 'https://cs5610-summer2-2018-nodejs.herokuapp.com';
// const SECTION_API_URL = 'http://localhost:3000';
@Injectable()
export class SectionServiceClient {
  createSection = section =>
    fetch(SECTION_API_URL + '/api/course/' + section.courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())

  findAllSections = () =>
    fetch(SECTION_API_URL + '/api/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch(SECTION_API_URL + '/api/course/' + courseId + '/section', {
      credentials: 'include'
    })
      .then(response => response.json())

  findSectionsForStudent = () =>
    fetch(SECTION_API_URL + '/api/student/section', {
      credentials: 'include'
    })
      .then(response => response.json())

  findSectionById = sectionId =>
    fetch(SECTION_API_URL + '/api/section/' + sectionId)
      .then(section => section.json())

  updateSection = section =>
    fetch(SECTION_API_URL + '/api/section/' + section._id, {
      method: 'put',
      body: JSON.stringify(section),
      headers: {
        'content-type' : 'application/json'
      }
    })
      .then(updatedSection => updatedSection.json())

  deleteSection = sectionId =>
    fetch(SECTION_API_URL + '/api/section/' + sectionId, {
      method: 'delete'
    }).then(response => response.text())

  enrollStudentInSection = (sectionId, toEnroll) =>
    fetch(SECTION_API_URL + '/api/section/' + sectionId + '/enrollment', {
      method: 'post',
      body: JSON.stringify({toEnroll: toEnroll}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
}
