import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  findUserById(userId) {
      return fetch('http://localhost:3000/api/user/' + userId)
        .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
  }

  logout() {
    return fetch('http://localhost:3000/api/logout',
      {
      method: 'post',
        credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
      credentials: 'include'
    }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
