import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  
  //embed style for better portability
  template:`
      <span class ="oi" 
      [class.oi-thumb-up]="isActive"
      [class.oi-thumb-down]="!isActive"
      (click)="onClick()">
      </span>
  `,

  styles:[`
      .oi{font-size: 50px;}
      .oi-thumb-up{color:green;}
      .oi-thumb-down{color:red;}
  `],
  
  //templateUrl: './star.component.html',
  //styleUrls: ['./star.component.css']
  //can add input here without importing from angular core but its hard to change
  //inputs:['isActive']
})
export class StarComponent implements OnInit {
  // decorate isActive so you can use it in the .html need to import Input from angular/core 
  @Input('is-favorite')isActive:boolean=false;

  @Output() change= new EventEmitter;
  
  ngOnInit(): void {
  }
  onClick(){
    //will stop even from moving through all the wrapping <div>s
    //event.stopPropigation();
    this.isActive=!this.isActive;
    //will emit event
    this.change.emit(this.isActive);
    //you can also pass an object
    this.change.emit({newValue:this.isActive});
  }
}
