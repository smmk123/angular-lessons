import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map }from'rxjs';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    let token = localStorage.getItem('token');
    const httpOptions = 
      {headers:new HttpHeaders(
        {Authorization: 'Bearer ' + token})
      }
    console.log(httpOptions);
    
    // let options = {
    //   Authorization:'Bearer  + {token}'
    // }
    //header.set('Authorization','Bearer ' + token);

    //let options = new RequestOptions();
    console.log(httpOptions);
    console.log(this.http);

    return this.http.get('/api/orders', httpOptions)
      .pipe(
        map(response => response) 
      )
  }
}
