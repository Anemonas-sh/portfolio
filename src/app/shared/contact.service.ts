import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Url
  url = 'https://script.google.com/macros/s/AKfycbwn4h3IsKyaQ4puBk9XUMmCJ7AehwjsOFZa8f7j2V3bG18F-NHf/exec';

  constructor(private http: HttpClient) {
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'text/plain;charset=utf-8'
    })
  };

  requestContact(data): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

}
