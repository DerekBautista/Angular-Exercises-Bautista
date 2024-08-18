import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilerComponent } from './components/profiler.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    ProfilerComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, UserRoutingModule, SharedModule, ReactiveFormsModule
  ]
})
export class UserModule { }
