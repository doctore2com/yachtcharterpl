import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Charter} from "../models/charter.model";

export class CharterService{
  private apiUrl = 'http://localhost:8080/charters';

  constructor(private http:HttpClient) {
    this.http = http;
  }

  createCharter(charter: Charter):Observable<Charter>{
  return this.http.post<Charter>(this.apiUrl,charter);
  }
}
