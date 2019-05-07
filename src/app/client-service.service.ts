import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from './shared/IClient';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ClientServiceService{
    constructor (private http:HttpClient){}

   saveClients(client:Client): Observable<Client> {
       return this.http.post<Client>('http://localhost:8080/Client/save', client).pipe(catchError(this.handleError));
   }

   getAllClients() : Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/Clients').pipe(
      catchError(this.handleError)
    );
   }
   getClient(idClient: number) : Observable<Client> {
    return this.http.get<Client>('http://localhost:8080/Client/'+idClient).pipe(
      catchError(this.handleError)
    );
  }
  deleteClient(idClient: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/Client/delete/'+idClient).pipe(
      catchError(this.handleError)
    );
  }
  

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}