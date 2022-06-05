import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title ='Authors';
  authors;

  //injecting AuthorService so that model logic can be seperate
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }
  
  getTitle(){
    return this.title
  }

}
