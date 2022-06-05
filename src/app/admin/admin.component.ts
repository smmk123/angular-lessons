import { OrderService } from './../services/v1/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <h1>Admin</h1>
  <h2>Orders</h2>
  <ul>
    <li *ngFor="let order of orders">{{ order }}</li>
  </ul>
  `
})
export class AdminComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
      console.log("orders from getorders "+ this.orders)
  }
}
