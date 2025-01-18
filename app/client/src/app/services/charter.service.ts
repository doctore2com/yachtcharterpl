import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Charter} from "../models/charter.model";


@Injectable({
  providedIn: 'root'
})
export class CharterService{
  private apiUrl = 'http://localhost:8080/charters';

  constructor(private http:HttpClient) {
    this.http = http;
  }

  createCharter(charter: Charter):Observable<Charter>{
    console.log('Wysylam dane do bazy', charter);
    return this.http.post<Charter>(this.apiUrl,charter);
  }
}
