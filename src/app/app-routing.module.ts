import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth-page/sign-in/sign-in.component';
import { SignUpComponent } from './auth-page/sign-up/sign-up.component';

const routes: Routes = [
{path:'',component:SignInComponent},
{path:'signIn',component:SignInComponent},
{path:'signUp',component:SignUpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
