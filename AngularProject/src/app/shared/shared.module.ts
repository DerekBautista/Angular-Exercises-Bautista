import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommandBarComponent, HeaderComponent
  ],
  imports: [
                  // to enable the href's if we're going to 
                  //import it in app instead of import
    CommonModule, RouterModule
  ],
  exports:[
    CommandBarComponent, HeaderComponent
  ]
})
export class SharedModule { }
