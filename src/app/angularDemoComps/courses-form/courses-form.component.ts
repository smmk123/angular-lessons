import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',

  styles:[`
    .form-control.ng-touched.ng-invalid{
      border:2px solid red;
    };
  `]

})


export class CoursesFormComponent {

courseName!:string;

  courseCatagories=[
  {id:1, name:"Development"},
  {id:2, name:"Art"},
  {id:3, name:"Languages"}
]

isGuarenteed!:boolean;

submit(form:any){
  if(form.valid){console.log('valid form: ' + form.valid)}
  console.log(form);
}

}
