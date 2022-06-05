import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html'
})
export class NgForComponent  {
  classRooms=[
    {id: 1, number: 'West'},
    {id: 2, number: 'East'},
    {id: 3, number: 'North'}
  ];
  courses: any;

  onAdd(){
    this.classRooms.push({id:4, number:'South'});
  }
  onRemove(classRoom:any){
    let index = this.classRooms.indexOf(classRoom);
    this.classRooms.splice(index, 1);
  }

  loadCourses(){
    this.courses=[
      {id: 1, name: 'West'},
      {id: 2, name: 'East'},
      {id: 3, name: 'North'}
    ];
  }

  trackCourse(index: any, course: { id: any; }){
    return course ? course.id : undefined;
  }

}
