import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight-model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = '/search-flights';

  constructor(private http: HttpClient) { }
 
  searchFlights(origin: string, destination: string): Observable<any> {
    const params = new HttpParams()
      .set('origin', origin)
      .set('destination', destination);
 
    return this.http.get(this.apiUrl, { params });
  }
}
