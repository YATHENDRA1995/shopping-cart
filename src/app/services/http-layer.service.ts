import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLayerService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string): Observable<any> {
    try {
      return this.http.get(url);
    } catch (error) {
      console.log(error);
    }
  }

}
