import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthors(){
    return ["author 1", "Steven Bing", "Xilliam Jizhan"];
  }
}
