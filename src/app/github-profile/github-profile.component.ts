import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((params:ParamMap)=>{
        console.log(params);
      })
    ////use snapshot if you're going to force user to reload page
    // let id =this.route.snapshot.paramMap.get('id')
    // console.log(id)
  }


  submit(){
    //will bring the user back to the follower page after clicking submit
    this.router.navigate(['/followers'],{
      queryParams:{page:1,order:'newest'}
    });
  }

}
