import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { SignInComponent } from './auth-page/sign-in/sign-in.component';
import { SignUpComponent } from './auth-page/sign-up/sign-up.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SignInCComponent } from './auth-page/sign-in/sign-in-c/sign-in-c.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    SignInComponent,
    SignUpComponent,
    SignInCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
