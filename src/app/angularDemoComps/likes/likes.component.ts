import { Component, Input } from '@angular/core';

// need to install open iconic icon library
@Component({
  selector: 'app-likes',
  template:`
    <span class ="oi oi-heart" 
        [class.highlighted]="isActive"
        (click)="onClick()">
    </span>
    <span>{{likesCount}}</span>
  `,

  styles:[`
    .oi{font-size: 15px;
        color:#ccc;
        cursor:pointer;
    }
    .highlighted{color:deeppink;}
  `],
})


export class LikesComponent {
@Input()isActive!: boolean;
@Input()likesCount!: number;
  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive=!this.isActive;
  }
}
