import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produit } from './shared/IProduit';
import { Commande } from './shared/ICommande';

@Injectable({
  providedIn: 'root'
})
export class OrdreServiceService {

  constructor(private http: HttpClient) { }

  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>('http://localhost:8080/produit/save', produit).pipe(
      catchError(this.handleError)
    );
  }

  ajouterCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>('http://localhost:8080/ordre/save', commande).pipe(
      catchError(this.handleError)
    );
  }

  getAllCommandes() : Observable<Commande[]> {
    return this.http.get<Commande[]>('http://localhost:8080/ordres').pipe(
      catchError(this.handleError)
    );
  }
  getCommande(id: number) : Observable<Commande> {
    return this.http.get<Commande>('http://localhost:8080/ordre/'+id).pipe(
      catchError(this.handleError)
    );
  }
  deleteCommande(id: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/ordre/delete/'+id).pipe(
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
