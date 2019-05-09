import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Facture } from './shared/IFacture';

@Injectable()
export class FactureService {
    constructor (private http: HttpClient) {}

    private factureApiUrl = './api/factures/factures.json';

    getAllFactures() : Observable<Facture[]>{
        return this.http.get<Facture[]>('http://lolcalhost:8080/facture').pipe(
            catchError(this.handleError)
        );
    }

    getFacture(id: number) : Observable<Facture> {
        return this.http.get<Facture>('http://localhost:8080/facture/'+id).pipe(
           catchError(this.handleError) 
        ); 
    }

    saveFacture(facture: Facture): Observable<Facture> {
        return this.http.post<Facture>('http://localhost:8080/facture/save', facture).pipe(
            catchError(this.handleError)
        );

    }

    deleteFacture(id: number): Observable<{}> {
        return this.http.delete('http://localhost:8080/facture/delete'+id).pipe(
            catchError(this.handleError)
        ); 
    }

    getTotalHTRemise(id:number):Observable<number> {
        facture:object = this.http.get<Facture>('http://localhost:8080/facture/'+id).pipe(
            catchError(this.handleError) 
         );
         return this.http.post<number>('http://localhost:8080/facture/totalhtremise')
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