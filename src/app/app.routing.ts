import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import{Routes,RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgetComponent} from "./forget/forget.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {IndexComponent} from "./index/index.component";
const routes : Routes = [
{ path : "" , pathMatch : "full" ,redirectTo:"authentication"},
{path: 'authentication', component : AuthenticationComponent,children:[
{path: 'login', component : LoginComponent,outlet:'login' },
{path: 'signup', component : SignupComponent,outlet:'signup' },
{path: 'forget', component : ForgetComponent,outlet:'forget' }
]},
{path: 'index', component : IndexComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})

export class AppRouting {}
export const appRoutingComponents = [LoginComponent,SignupComponent,ForgetComponent]