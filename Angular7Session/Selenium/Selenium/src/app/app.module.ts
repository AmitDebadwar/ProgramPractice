import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { GlobalErrrorHandler  } from './MySession/common/global-error-handler';
import { ToDoListComponent } from './MySession/to-do-list/to-do-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component'; 
import { routerObj } from './router-object';
import { HomeComponent } from './MySession/home/home.component';
import { InterpolationAndTwoWayDataBindingComponent } from './MySession/interpolation-and-two-way-data-binding/interpolation-and-two-way-data-binding.component';
import { PipeDemoComponent } from './MySession/pipe-demo/pipe-demo.component';
import { TemplateDrivenFormForMyAppComponent } from './MySession/template-driven-form-for-my-app/template-driven-form-for-my-app.component';
import { RouteNotFoundComponent } from './MySession/route-not-found/route-not-found.component';
import { FavoriteComponent } from './MySession/favorite/favorite.component';
import { AIPipesComponent } from './MySession/aipipes/aipipes.component';
import { SummaryPipe } from './MySession/aipipes/summary.pipe';
import { AppSampleAppComponent } from './ASampleApp/app-sample-app/app-sample-app.component';

import { FirstAngularAppWithCliComponent } from './MySession/first-angular-app-with-cli/first-angular-app-with-cli.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { PostsComponent } from './MySession/posts/posts.component';
import { CommentsComponent } from './MySession/comments/comments.component';
import { MobileNumberFormatPPipe } from './MySession/mobile-number-format-p.pipe';
import { MaskMobileNumberPipe } from './MySession/mask-mobile-number.pipe';
import { PhoneNumberFormatDirective } from './MySession/phone-number-format.directive';
import { CustomDirectivesComponent } from './MySession/custom-directives/custom-directives.component';
import { LikeComponent } from './mysession/like/like.component';
 

@NgModule({
  declarations: [
    FirstAngularAppWithCliComponent, //needs to be deleted
    DynamicMenuComponent, //needs to be delted
    AppComponent,
    HomeComponent,
    InterpolationAndTwoWayDataBindingComponent,
    PipeDemoComponent,
    TemplateDrivenFormForMyAppComponent,
    RouteNotFoundComponent,
    ToDoListComponent,
    FavoriteComponent,
    AIPipesComponent,
    SummaryPipe,
    AppSampleAppComponent,
    PostsComponent,
    CommentsComponent,
    MobileNumberFormatPPipe,
    MaskMobileNumberPipe,
    PhoneNumberFormatDirective,
    CustomDirectivesComponent,
    LikeComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routerObj)
  ],
 
  providers: [
    { provide : ErrorHandler, useClass : GlobalErrrorHandler}
  ],
 
  bootstrap: [AppComponent]

  //AppSampleAppComponent //AppComponent
})
export class AppModule { }
