import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styles: [`
    .form { 
      flex:true;
      flex-direction:column;
    }
  `]

})
export class PasswordChangeComponent {
form:FormGroup;

  constructor(fb:FormBuilder) { 
    this.form = fb.group({
        oldPassword:['',Validators.required,
          PasswordValidators.shouldBeUnique],
        newPassword:['',Validators.required],
        repeatPassword:['',Validators.required]
    },{
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  submit(f:any){
    console.log('write me'+f);
  }

  get oldPassword(){return this.form.get('oldPassword')as FormControl;}

  get newPassword(){return this.form.get('newPassword')as FormControl;}

  get repeatPassword(){return this.form.get('repeatPassword')as FormControl;}

}
