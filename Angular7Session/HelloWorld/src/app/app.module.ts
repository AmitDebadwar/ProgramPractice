import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppSampleAppComponent } from './ASampleApp/app-sample-app/app-sample-app.component';
import { HrefStopPropogationDirective } from './common/customDirectives/href-stop-propogation.directive';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { AIPipesComponent } from './MySession/aipipes/aipipes.component';
import { SummaryPipe } from './MySession/aipipes/summary.pipe';
import { CommentsComponent } from './MySession/comments/comments.component';
import { GlobalErrrorHandler } from './MySession/common/global-error-handler';
import { CustomDirectivesComponent } from './MySession/custom-directives/custom-directives.component';
import { FavoriteComponent } from './MySession/favorite/favorite.component';
import { FirstAngularAppWithCliComponent } from './MySession/first-angular-app-with-cli/first-angular-app-with-cli.component';
import { HomeComponent } from './MySession/home/home.component';
import { InterpolationAndTwoWayDataBindingComponent } from './MySession/interpolation-and-two-way-data-binding/interpolation-and-two-way-data-binding.component';
import { MaskMobileNumberPipe } from './MySession/mask-mobile-number.pipe';
import { MobileNumberFormatPPipe } from './MySession/mobile-number-format-p.pipe';
import { PhoneNumberFormatDirective } from './MySession/phone-number-format.directive';
import { PipeDemoComponent } from './MySession/pipe-demo/pipe-demo.component';
import { PostsComponent } from './MySession/posts/posts.component';
import { RouteNotFoundComponent } from './MySession/route-not-found/route-not-found.component';
import { SubjectRxJsImplementationComponent } from './MySession/subject-rx-js-implementation/subject-rx-js-implementation.component';
import { TemplateDrivenFormForMyAppComponent } from './MySession/template-driven-form-for-my-app/template-driven-form-for-my-app.component';
import { ToDoListComponent } from './MySession/to-do-list/to-do-list.component';
import { CustomPanelComponent } from './otherAdvancedWork/custom-panel/custom-panel.component';

import { EncryptDectypeWithCryptoJSComponent } from './otherAdvancedWork/encryptionAndDecreption/encrypt-dectype-with-crypto-js/encrypt-dectype-with-crypto-js.component';
import { MyAnimationsImplementationsComponent } from './otherAdvancedWork/my-animations-implementations/my-animations-implementations.component';
import { ReusableLikeComponent } from './reusable-like/reusable-like.component';
import { routerObj } from './router-object';
import { SmokeTestConfigFileGeneratorComponent } from './Selenium/smoke-test-config-file-generator/smoke-test-config-file-generator.component';
import { ConsumerOfCustomPanelComponent } from './otherAdvancedWork/consumer-of-custom-panel/consumer-of-custom-panel.component';







 

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
    SmokeTestConfigFileGeneratorComponent,
    ReusableLikeComponent,
    SubjectRxJsImplementationComponent,
    EncryptDectypeWithCryptoJSComponent,
    HrefStopPropogationDirective,
    CustomDirectivesComponent,
    MyAnimationsImplementationsComponent,
    CustomPanelComponent,
    ConsumerOfCustomPanelComponent 

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

   //AppComponent
})
export class AppModule { }
