import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-arcvhive-date',
  templateUrl: './arcvhive-date.component.html',
  styleUrls: ['./arcvhive-date.component.css']
})
export class ArcvhiveDateComponent implements OnInit {
  year: string | null='';
  month: string | null='';
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((params:ParamMap)=>{
      this.year= params.get('year');
      this.month=params.get('month');
    })
  }

  submit(){
    //will bring the user back to the follower page after clicking submit
    this.router.navigate(['/archive'],{
      queryParams:{page:1,order:'newest'}
    });
  }

}
