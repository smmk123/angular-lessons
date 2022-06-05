import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-statmenets',
  templateUrl: './ng-statmenets.component.html'
})
export class NgStatmenetsComponent implements OnInit {
  courses=[];
  viewMode='map';
  
  constructor() { }

  ngOnInit(): void {
  }

}
