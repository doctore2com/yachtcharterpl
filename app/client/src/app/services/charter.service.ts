import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map, Observable, tap} from "rxjs";
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
    console.log('Wysyłam dane do bazy:', charter);
    return this.http.post<Charter>(this.apiUrl,charter);
  }

  getAllCharters(): Observable<Charter[]> {
    return this.http.get<Charter[]>(this.apiUrl).pipe(
      tap(response => console.log('Surowa odpowiedź z serwera:', response)),
      map(response => {
        if (!Array.isArray(response)) {
          console.error('Odpowiedź nie jest tablicą:', response);
          return [];
        }
        return response;
      }),
      tap(charters => console.log('Przetworzone rezerwacje:', charters))
    );
  }
}
