import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    BookItemComponent,
    BookListComponent
  ],
  imports: [
    CommonModule, BookRoutingModule
  ]
})
export class BookModule { }
