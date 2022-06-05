import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
// //one way for doing it more mnessy
// form = new FormGroup({
//   name: new FormControl(),
//   contact: new FormGroup({
//     email: new FormControl(),
//     phone: new FormControl()
//   }),
//   topics: new FormArray([])
// });

//cleaner way using form builder constructor
form;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      name:['',Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    });
  }

}
