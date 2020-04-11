import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';


const appRoutes:Routes =[
                {
                    path:'',
                    component:WelcomePageComponent
                },
                {
                    path:'login',
                    component:LoginSignupComponent
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