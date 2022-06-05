import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css'],
})
export class DemoPageComponent implements OnInit {
  title = 'Angular Lessons';
  post={
    title :'star',
    isActive:true
  }

  onFavoriteChanged(isActive: boolean){
    console.log('event changed '+isActive);
  }

  onFavoriteChangedObject(eventargs: any){
    console.log('event changed ', eventargs);
  }

  tweet={
    body: 'here is the body of a tweet',
    isLiked:false,
    likeCount: 499
  }

  constructor() { }

  ngOnInit(): void {
  }

}
