import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookItemComponent,
    BookListComponent,
    BookFormComponent,
    
  ],
  imports: [
    CommonModule, BookRoutingModule, SharedModule,
  ]
})
export class BookModule { }
