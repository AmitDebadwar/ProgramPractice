

import { InterpolationAndTwoWayDataBindingComponent } from './MySession/interpolation-and-two-way-data-binding/interpolation-and-two-way-data-binding.component';

import { PipeDemoComponent } from './MySession/pipe-demo/pipe-demo.component';

import { TemplateDrivenFormForMyAppComponent } from './MySession/template-driven-form-for-my-app/template-driven-form-for-my-app.component';

import { RouteNotFoundComponent } from './MySession/route-not-found/route-not-found.component';
import { HomeComponent } from './MySession/home/home.component'; 
import { PostsComponent } from './MySession/posts/posts.component';
import { CustomDirectivesComponent } from './MySession/custom-directives/custom-directives.component';

 
 



export const routerObj = [
    { path : '', component: HomeComponent },
  
    { path : 'interpolationand2waydatabinding', component : InterpolationAndTwoWayDataBindingComponent },
    { path : 'pipe-demo', component : PipeDemoComponent },
 
  
    { path : 'template-driven-form' , component : TemplateDrivenFormForMyAppComponent},
    { path : 'app-posts', component : PostsComponent},
    { path : 'app-custom-directives', component : CustomDirectivesComponent}, 
    { path : '**', component : RouteNotFoundComponent }
  ]