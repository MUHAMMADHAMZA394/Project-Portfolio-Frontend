import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { FadeInDirective } from './login/fade-in.directive';
import { GlassStyleDirective } from './login/glass-style.directive';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    FadeInDirective,
    GlassStyleDirective,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRegistrationRoutingModule
  ]
})
export class UserRegistrationModule { }
