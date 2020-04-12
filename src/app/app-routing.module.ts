import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './views/auth/login/login.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import {SignupComponent} from './views/auth/signup/signup.component';


const appRoutes:Routes =[
                {
                    path:'',
                    component:WelcomePageComponent
                },
                {
                    path:'login',
                    component:LoginComponent
                },
                {
                    path:'signup',
                    component:SignupComponent
                },
                {
                    path:'**',
                    redirectTo:''
                }
            ];


@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})
export class AppRoutingModule {

}