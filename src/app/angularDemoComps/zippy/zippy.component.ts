import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-zippy',
  template:`
  <div class="zippy">
    <div class="zippy-heading"
      [class.expanded]="isExpanded"
      (click)="onClick()"
    >{{title}}
      <span class="oi"
        [ngClass]="{
          'oi-chevron-top':isExpanded,
          'oi-chevron-bottom':!isExpanded
        }"
      ></span>
    </div>
    <div *ngIf='isExpanded' class="zippy-body"><ng-content></ng-content></div>
  </div>
  `,

  styles: [`
    .zippy {
      border: 1px solid#ccc;
      border-radius:2px;
    }

    .zippy-heading{
      font-weight:bold;
      padding:20px;
      cursor:pointer;
    }

    .expanded{
      background:#f0f0f0;
    }

    .oi {
      float:left;
      padding-right: 10px;
      padding-top: 5px;
    }

  `],

})

export class ZippyComponent {
  @Input()title!: string;

  isExpanded!:Boolean;

  onClick(){
    this.isExpanded=!this.isExpanded;
  }

}
