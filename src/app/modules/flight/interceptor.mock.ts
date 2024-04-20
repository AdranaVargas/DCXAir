import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import flights from './markets.json';

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/search-flights')) {
      const origin = req.params.get('origin');
      const destination = req.params.get('destination');
      const filteredFlights = flights.filter(flight =>
        flight.Origin === origin && flight.Destination === destination);

      if (filteredFlights.length === 0) {
        return throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Not Found', error: 'No flights found matching the criteria.' }));
      }
      return of(new HttpResponse({ status: 200, body: filteredFlights }));
    }
    return next.handle(req);
  }

}

