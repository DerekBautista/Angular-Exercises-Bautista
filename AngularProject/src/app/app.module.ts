import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './shared/components/header/header.component';
//import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookResolver } from './resolvers/book.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //I could do this if I dont plan to add a router module in sharedmodule
    //HeaderComponent,
    // CommandBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
