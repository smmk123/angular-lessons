import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
//need to add ReactiveFormsModule into app.module

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
      //Async validator
      UsernameValidators.shouldBeUnique,),
      password: new FormControl('', Validators.required)
    }),
  });

  get username(){
    //username is nested in form.acount
    return this.form.get('account.username')as FormControl;
  }

  login(){
    //let isValid = authService.login(this.form.value);
    //if (!isValid){
      this.form.setErrors({
        invalidLogin: true
      });
    //}
  }


}
