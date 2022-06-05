import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
})
export class SimpleBindingComponent implements OnInit {
  title='Simple Binding'
  imageUrl='../assets/lizard.jpg';

  //can alter DOM attribute through [attr.] binding
  colSpan="2";

  // can set button actions through [class] binding
  isActive:boolean;

  onClick(event: any){
    //will stop even from moving through all the wrapping <div>s
    //event.stopPropigation();
    console.log(event);
    if (!this.isActive){this.isActive=true}
    else {this.isActive=false}
  }

  constructor() { 
    this.isActive=true;
  }

  ngOnInit(): void {
  }

}
