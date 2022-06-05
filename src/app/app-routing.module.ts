import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './archives/archives.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './angularDemoComps/posts/posts.component';
import { ArcvhiveDateComponent } from './archive-date/arcvhive-date.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthGuard } from './services/v1/auth-guard.service';
import { AdminAuthGuard } from './services/v1/admin-auth-guard.service';

const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'no-access', component: NoAccessComponent},
      
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},

      {path: 'posts', component: PostsComponent},
      {path: 'archive', component: ArchivesComponent},
      
      {path: 'archive/:year/:month', component: ArcvhiveDateComponent },
      {path: 'demo', component: DemoPageComponent},
      {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
