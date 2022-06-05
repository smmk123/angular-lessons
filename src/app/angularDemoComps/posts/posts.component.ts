import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/v1/post.service';
import { AppError } from'../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInputError } from '../../common/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts?:any;

  constructor(private service:PostService) { }

  createPost(input:HTMLInputElement){
    let post:any = {title:input.value}
    input.value='';
    this.service.createPost(post)
      .subscribe(
        (response:any) => {
        post['id'] =response.id;
        this.posts.splice(0,0,post);
        //this.posts.push(post)
        console.log(response);
      },
      (error:AppError) =>{
      if(error instanceof BadInputError){
        alert('This post had already been deleted.');
        //this.form.setErrors(error.originalError)
      }
      else{
        alert('An Unexpected error occured');
        console.log(error);
      }
      }
      );
  }

  updatePost(post: any){
    this.service.updatePost(post)
      .subscribe(
        response=>{
        console.log(response);
        },
      error =>{
        alert('An Unexpected error occured');
        console.log(error);
      });

    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post: any){
    let index=this.posts.indexOf(post);
    this.service.deletePost(index)
      .subscribe(
        response=>{
          this.posts.splice(index, 1);
          console.log(response);
        }, 
        (error: AppError) =>{
          if(error instanceof NotFoundError)
            alert('This post had already been deleted.');
          else{
            alert('An Unexpected error occured');
            console.log(error);
          }
      });

    //this.http.put(this.url, JSON.stringify(post))
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      response =>{
        this.posts =response;
      });
  }

}
