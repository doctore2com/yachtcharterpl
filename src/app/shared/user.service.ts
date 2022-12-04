import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public API = 'http://localhost:8080';
  public USER_API = this.API + '/registration';

  // id:number;
  // username:string;
  // email:string;
  // password:string;



  constructor(private http: HttpClient) {
  }


  getAll(): Observable<any> {
    console.log('getall');
    return this.http.get(this.USER_API + '/allUsers');
  }
  get(id: string) {
    return this.http.get(this.USER_API + '/' + id);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['href']) {
      result = this.http.put(user.href, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  loginUserFromRemote(email, password): Observable<any> {
    return this.http.post('http://localhost:8080/registration/login', {
      email: email,
      password: password
    })
  }

  registerUser(username, email, password): Observable<any> {
    return this.http.post('http://localhost:8080/registration/registered', {
      username: username,
      email: email,
      password: password
      })
}
}

