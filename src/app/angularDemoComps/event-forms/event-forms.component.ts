import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-forms',
  templateUrl: './event-forms.component.html',
  styleUrls: ['./event-forms.component.css']
})
export class EventFormsComponent implements OnInit {
  email ="me@nochange.com"
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUpOld($event: { keyCode: number; }){
    if($event.keyCode === 13) console.log("enter was pressed");
  }
  onKeyUpBetter(){
    console.log("enter was pressed");
  }

  onKeyUpTemplateVariable($event: any){
    console.log($event.target.value);
  }

  onKeyUpTemplateVariable2(email: any){
    console.log(email);
  }
  onKeyUp(){
    console.log(this.email);
  }
  
}

//need to import forms bundle in app.module