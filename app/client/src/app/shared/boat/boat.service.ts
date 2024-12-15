import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from "./boat.model";

@Injectable()
export class BoatService {

public API = 'http://localhost:8080';
public BOAT_API = `${this.API}/boats`;

  constructor(private http: HttpClient) {
}


getAll(): Observable<any> {
    console.log('Wywołanie getAll, URL:', `${this.BOAT_API}/`);
    return this.http.get<Boat[]>(`${this.BOAT_API}/`);
  }
  get(id: string) {
      return this.http.get(this.BOAT_API + '/' + id);
    }

    save(boat: any): Observable<any> {
      console.log('Zapisywanie łodzi:', boat);
      let result: Observable<Object>;
      if (boat['href']) {
        result = this.http.put(boat.href, boat);
      } else {
        result = this.http.post(this.BOAT_API, boat);
      }
      return result;
    }

    remove(href: string) {
      return this.http.delete(href);
    }
    }

