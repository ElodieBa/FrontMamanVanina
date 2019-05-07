import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { IFacture } from './facture'; 

@Injectable()
export class FactureService {
    constructor (private http: HttpClient) {}

    private factureApiUrl = './api/factures/factures.json';

    getFactureById(id : number): Observable<IFacture | undefined> {
        return this.getFactures().pipe(
            map(
                (factures : IFacture[])=> factures.find(f => f.factureId == id)
            ) 
            
            );
    }

    public getFactures() : Observable<IFacture[]> {
        return this.http.get<IFacture[]>(this.factureApiUrl).pipe(
            tap(data => console.log('All : ', JSON.stringify(data))), 
            catchError(this.handleError)
        ); 
     }
     private handleError(err: HttpErrorResponse){
         console.error(err.message); 
         return Observable.throw(err.message); 
     }
}