import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from "./boat.model";

@Injectable({providedIn:'root'})
export class BoatService {

public API = 'http://localhost:8080';
public BOAT_API = `${this.API}/boats`;

  constructor(private http: HttpClient) {
}


getAll(): Observable<Boat[]> {
    console.log('Wywołanie getAll, URL:', `${this.BOAT_API}/`);
    return this.http.get<Boat[]>(`${this.BOAT_API}/`);
  }
  get(id: string): Observable<Boat> {
      return this.http.get<Boat>(this.BOAT_API + '/' + id);
    }

    save(boat: Boat): Observable<Boat> {
      console.log('Zapisywanie łodzi:', boat);
      let result: Observable<Object>;
      // if (boat['href']) {
      //   result = this.http.put<Boat>(`${this.BOAT_API}/${boat.id}`, boat);
      // } else {
        return this.http.post<Boat>(this.BOAT_API, boat);
      // }
    }

    remove(id: string): Observable<void> {
      return this.http.delete<void>(`${this.BOAT_API}/${this.BOAT_API}/${id}`);
    }
    }

