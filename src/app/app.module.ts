import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './angularDemoComps/author/author.component';
import { EventFormsComponent } from './angularDemoComps/event-forms/event-forms.component';
import { SimpleBindingComponent } from './angularDemoComps/simple-binding/simple-binding.component';
import { StarComponent } from './angularDemoComps/star/star.component';
import { TitleCaseComponent } from './angularDemoComps/title-case/title-case.component';
import { CustomPipe } from './custom.pipe';
import { TitleCasePipe } from './titleCase.pipe';
import { PanelComponent } from './angularDemoComps/panel/panel.component';
import { LikesComponent } from './angularDemoComps/likes/likes.component';
import { NgStatmenetsComponent } from './angularDemoComps/ng-statmenets/ng-statmenets.component';
import { NgForComponent } from './angularDemoComps/ng-for/ng-for.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './angularDemoComps/zippy/zippy.component';
import { ContactFormComponent } from './angularDemoComps/contact-form/contact-form.component';
import { CoursesFormComponent } from './angularDemoComps/courses-form/courses-form.component';
import { SignupFormComponent } from './angularDemoComps/signup-form/signup-form.component';
import { NewCourseFormComponent } from './angularDemoComps/new-course-form/new-course-form.component';
import { FormBuilderComponent } from './angularDemoComps/form-builder/form-builder.component';
import { PasswordChangeComponent } from './angularDemoComps/password-change/password-change.component';
import { PostsComponent } from './angularDemoComps/posts/posts.component';
import { PostService } from './services/v1/post.service';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/v1/github-followers.service';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { ArchivesComponent } from './archives/archives.component';
import { ArcvhiveDateComponent } from './arcvhive-date/arcvhive-date.component';
import { OrderService } from './services/v1/order.service';
import { AuthService } from './services/v1/auth.service';
import { LoginComponent } from './login/login.component';
import { fakeBackendFactory } from './helpers/fake-backend';
import { AuthGuard } from './services/v1/auth-guard.service';
import { AdminAuthGuard } from './services/v1/admin-auth-guard.service';
import { AdminComponent } from './admin/admin.component';
//import { fakeBackendProvider } from './helpers/fake-backend';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    EventFormsComponent,
    SimpleBindingComponent,
    StarComponent,
    TitleCaseComponent,
    CustomPipe,
    TitleCasePipe,
    PanelComponent,
    LikesComponent,
    NgStatmenetsComponent,
    NgForComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CoursesFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    PasswordChangeComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    DemoPageComponent,
    ArchivesComponent,
    ArcvhiveDateComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    //fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions,
    PostService, 
    GithubFollowersService,
    //{ provide: ErrorHandler, useClass: AppErrorHandler }
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fakeBackendFactory,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
