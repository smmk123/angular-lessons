import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',

  styles:[`
    .form-control.ng-touched.ng-invalid{
      border:2px solid red;
    };
  `]
})
export class ContactFormComponent{
  
  contactMethods=[
    {id:1,name:"phone"},
    {id:2,name:"email"}
  ]

  contactFrequency=[
    {id:1,name:"daily"},
    {id:2,name:"weekly"}
  ]


  firstName!:string;

  log(x:any){console.log(x);}

  submit(form: any){
    if(form.valid){console.log('valid form: ' + form.valid)}
    console.log(form);
  }

}
