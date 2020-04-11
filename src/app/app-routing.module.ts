import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';

const appRoutes:Routes =[
                {
                    path:'',
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