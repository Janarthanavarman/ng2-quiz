import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

const QuizHost :string ="https://localhost:5001/api/Quiz/";
@Injectable()
export class QuizService {
  
  constructor(private http: HttpClient) { }

  getQustions(id: string) : Observable<any>{
    return this.http.get(`${QuizHost}get/${id}`).pipe(
      tap( _=> { console.log("getQustions success")}),      
      catchError(this.handleError<any>(`getQustions id=${id}`))
    );
  }

  getCategory(): Observable<any[]> {

    return this.http.get(`${QuizHost}get`).pipe(
      tap( _=> { console.log("getCategory success")}),      
      catchError(this.handleError<any>(`getCategory`))
    );
    
    // return [
    //   { id: 'data/aspnet.json', name: 'Asp.Net' },
    //   { id: 'data/csharp.json', name: 'C Sharp' },
    //   { id: 'data/designPatterns.json', name: 'Design Patterns' }
    // ];
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
