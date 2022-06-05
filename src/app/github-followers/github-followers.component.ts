import { GithubFollowersService } from './../services/v1/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // //screenshot if your going to force the user to reload the DOM
    // let id = this.route.snapshot.paramMap.get('id')
    // let page =this.route.snapshot.queryParamMap.get('page');

    ////subscribe without reloading DOM, but multiple sub is messy
    // this.route.paramMap.subscribe();
    // this.route.queryParamMap.subscribe();


    ////combine observable of querymap and paramMap
    // let obs = combineLatest([this.route.paramMap,this.route.queryParamMap])

    // obs.subscribe(combined=>{
    //   let id =combined[0].get('id');
    //   let page = combined[1].get('page');
    //   //this.service.getAll({id:id, page:page})

    //   this.service.getAll()
    //   .subscribe((followers:any) => {this.followers = followers});
    // });

    //clean up double subscribe and observable using map/switchmap
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap])
      .pipe(
        switchMap(combined=>{
          let id =combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
        .subscribe((followers:any) => {this.followers = followers});
  }
}

