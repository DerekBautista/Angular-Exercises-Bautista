import { Component } from '@angular/core';
import { Book } from 'src/app/modules/models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  /*
      id:number,
    name:string,
    authors:string[],
    isbn:string
  */
  constructor(private bookService:BookService){}
  books:Book[] = this.bookService.getBooks()

  handleEvent($event:any){
    console.log($event)
  }
}
