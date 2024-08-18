import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  index:number = -1
  books:Book[] = []
  // [
  //   {
  //     id:11111,
  //     name:"Harry Potter",
  //     authors:['J.K. Rowling'],
  //     isbn:'111111111X'
  //   },
  //   {
  //     id:22222,
  //     name:"Percy Jackson",
  //     authors:["Rick Riordan"],
  //     isbn:"222222222X"
  //   },
  //   {
  //     id:33333,
  //     name:"Derek's Web",
  //     authors:["Derek Roi T. Bautista", "Alice Guo", "Carlos Yulo"],
  //     isbn:"333333333X"
  //   }
  // ]

  private serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  getBooks = () => {
    return this.http
      .get<Book[]>(`${this.serverUrl}/books`)
      .pipe(tap((data) => {
        console.log('Books retrieved from server:', data);
        this.books = data;  // Update the books array with the retrieved data
      }));
  };
  
  //This is kept for debugging purposes
  getBooksOffline = () =>{
    console.log(`$Book service is returning books: ${this.books}`)
    return this.books
  }

  storeCalledBook(index:number){
    this.index = index;
  }

  getCalledBook(){
    let book:Book = this.books[this.index]
    this.index = -1;
    return book
  }
}
