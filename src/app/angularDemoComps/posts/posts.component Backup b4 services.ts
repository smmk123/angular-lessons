import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts?:any;
private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { 

  }

  createPost(input:HTMLInputElement){
    let post:any = {title:input.value}
    input.value='';
    this.http.post(this.url, post)
      .subscribe((response:any) => {
        post['id'] =response.id;
        this.posts.splice(0,0,post);
        //this.posts.push(post)
        console.log(response);
      },
      (error:Response) =>{
        if (error.status === 400) {
        //this.form.setErrors(error.json())
        }
        else{        
          alert('An Unexpected error occured');
          console.log(error);
        }

    });
  }

  updatePost(post: any){
    this.http.patch(this.url +'/'+ post.id, {isRead:true})
      .subscribe(response=>{
        console.log(response);});

    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post: any){
    this.http.delete(this.url +'/'+ post.id,)
      .subscribe(response=>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      }, 
      (error:Response) =>{
        if(error.status === 404) 
          alert('article not found');
        else{
          alert('An Unexpected error occured');
          console.log(error);
        }
    });

    //this.http.put(this.url, JSON.stringify(post))
  }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(response =>{
      this.posts =response;
    }, 
    error =>{
      alert('An Unexpected error occured');
      console.log(error);
  })
  }

}
