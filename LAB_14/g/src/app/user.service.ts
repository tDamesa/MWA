import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getEmailName() {
    return this.http.get<{ name: string; email: string }>(
      'http://jsonplaceholder.typicode.com/users/1'
    );
  }
  getPost() {
    return this.http.get<{body: string}[]>('http://jsonplaceholder.typicode.com/posts?userId=1');
  }
}
