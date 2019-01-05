

import { InterpolationAndTwoWayDataBindingComponent } from './MySession/interpolation-and-two-way-data-binding/interpolation-and-two-way-data-binding.component';

import { PipeDemoComponent } from './MySession/pipe-demo/pipe-demo.component';

import { TemplateDrivenFormForMyAppComponent } from './MySession/template-driven-form-for-my-app/template-driven-form-for-my-app.component';

import { RouteNotFoundComponent } from './MySession/route-not-found/route-not-found.component';
import { HomeComponent } from './MySession/home/home.component'; 
import { PostsComponent } from './MySession/posts/posts.component';
import { CustomDirectivesComponent } from './MySession/custom-directives/custom-directives.component';
import { SmokeTestConfigFileGeneratorComponent } from './Selenium/smoke-test-config-file-generator/smoke-test-config-file-generator.component';
import { SubjectRxJsImplementationComponent } from './MySession/subject-rx-js-implementation/subject-rx-js-implementation.component';
 
import { Routes } from '@angular/router';
import { MyAnimationsImplementationsComponent } from './otherAdvancedWork/my-animations-implementations/my-animations-implementations.component';

 
 



export const routerObj : Routes = [
   //{ path : '', component: HomeComponent },
    { path : '', component: MyAnimationsImplementationsComponent },
    { path : 'interpolationand2waydatabinding', component : InterpolationAndTwoWayDataBindingComponent },
    { path : 'pipe-demo', component : PipeDemoComponent },
    { path : 'template-driven-form' , component : TemplateDrivenFormForMyAppComponent},
    { path : 'app-posts', component : PostsComponent},
    { path : 'app-custom-directives', component : CustomDirectivesComponent}, 
    { path : 'app-smoke-test-config-file-generator', component : SmokeTestConfigFileGeneratorComponent},
    { path : 'app-subject-rx-js-implementation', component : SubjectRxJsImplementationComponent},
    { path : 'lazy', loadChildren : './LazyThings/lazy-mod.module#LazyModModule', data : { preload: false}},
    { path : 'lazy/s', loadChildren : './LazyThings/lazy-mod.module#LazyModModule'},

    
    { path : '**', component : RouteNotFoundComponent }
  ]