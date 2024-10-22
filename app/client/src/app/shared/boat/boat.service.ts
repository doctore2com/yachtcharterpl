import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BoatService {

public API = 'http://localhost:8080';
public BOAT_API = this.API + '/boats';

  constructor(private http: HttpClient) {
}


getAll(): Observable<any> {
    console.log('getall');
    return this.http.get(this.BOAT_API + '/allBoat');
  }
  get(id: string) {
      return this.http.get(this.BOAT_API + '/' + id);
    }

    save(boat: any): Observable<any> {
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

