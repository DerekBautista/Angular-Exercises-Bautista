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
  books:Book[] = []

  constructor(private bookService:BookService, private route:ActivatedRoute){
    this.getBookList()
  }

  handleEvent($event:any){
    console.log("Event emmited:" + $event)
    if($event == 'DELETE ALL'){
      this.deleteAll()
    }
  }

  editBook = (i:number) =>{
    let book = this.books[i]
    this.bookService.setStoredBook(book)
  }

  deleteAll = () => {
    console.log('Deleting all books')
    if(this.books){
      for(let book of this.books){
        this.deleteBook(book.id)
      }
    }
    else{
      console.log('No data in books')
    }
  }

  getBookList(){
    this.bookService.getBooks().subscribe((data: Book[]) =>
    this.books = data)
  }

  deleteBook = (bookId:number) =>{
    this.bookService
    .deleteBook(bookId)
    .subscribe((data: { id: any; }) => {
      console.log(`Book ${data.id} gets deleted!`)
      this.getBookList()
    })
  }

}
