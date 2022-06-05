import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from'../../common/app-error';
import { BadInputError } from '../../common/bad-input-error';
import { NotFoundError } from '../../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  updatePost(post: any){
    return this.http.patch(this.url +'/'+ post.id, {isRead:true})
  }

  createPost(post: any){
    return this.http.post(this.url, post).pipe(
      catchError((error:Response)=>{
        if(error.status===400){
          return throwError(()=>new BadInputError(error))}
        return throwError(()=>new AppError(error));
      })
    )
  }

  deletePost(id: number){
    return this.http.delete(this.url +'/'+ id,).pipe(
     catchError((error:Response)=>{
       if (error.status===404){return throwError(()=>new NotFoundError(error))}
       return throwError(()=>new AppError(error));
     })
    
    )
  }

}
