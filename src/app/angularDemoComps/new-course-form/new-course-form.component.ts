import { Component} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styles: [`
  .form-array{ 
    margin: 50px;
  }
  `]
})
export class NewCourseFormComponent {
form=new FormGroup({
  topics: new FormArray([])
});

addTopic(topic:HTMLInputElement){
  this.topics.push(new FormControl(topic.value))
  topic.value = ''
}

removeTopic(topic:any){
let index = this.topics.controls.indexOf(topic);
this.topics.removeAt(index);
}

get topics(){
  return this.form.get('topics') as FormArray;
}

}
