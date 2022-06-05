import { BadInputError } from './../../common/bad-input-error';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';

import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  get(id: string) { 
    return this.http.get(this.url + '/' + id).pipe(
      map(response => response),
      catchError(this.handleError)   
    );
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      map(response => response),
      catchError(this.handleError)
      );
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
      map(response => response),      
      catchError(this.handleError)
      );
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
      map((response => response),
      //toPromise(),
      catchError(this.handleError)
      ));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(()=>new BadInputError(error.json()));
  
    if (error.status === 404)
      return throwError(()=>new NotFoundError(error));
    
    return throwError(()=>new AppError(error));
  }
}
