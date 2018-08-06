import {Injectable} from '@angular/core';
const SECTION_API_URL = 'https://cs5610-summer2-2018-nodejs.herokuapp.com';
@Injectable()
export class UserServiceClient {

  findUserById(userId) {
      return fetch(SECTION_API_URL + '/api/user/' + userId)
        .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(SECTION_API_URL + '/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
  }

  logout() {
    return fetch(SECTION_API_URL + '/api/logout',
      {
      method: 'post',
        credentials: 'include'
    });
  }

  profile() {
    return fetch(SECTION_API_URL + '/api/profile',
      {
      credentials: 'include'
    }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(SECTION_API_URL + '/api/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
