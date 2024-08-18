import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  books:Book[] | undefined

  constructor(private bookService:BookService, private route:ActivatedRoute){
    this.books = this.route.snapshot.data['books']
  }

  handleEvent($event:any){
    console.log("Event emmited:" + $event)
  }
  
  edit = (bookId:number) =>{
    console.log(`$Book ${bookId} gets edited!`)
    this.bookService.storeCalledBook(bookId)
  }

  delete = (bookId:number) =>{
    console.log(`$Book ${bookId} gets deleted!`)
  }

}
