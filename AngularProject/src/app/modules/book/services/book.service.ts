import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  index:number = 10
  books:Book[] = []
  storedBook:Book | undefined
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


  getBooks = ():Observable<Book[]> => {
    return this.http
      .get<Book[]>(`${this.serverUrl}/books`)
      //The data here should have the same data type as declared in the resolver
      //tho even if you don't follow this the code will work normally
      .pipe(tap((data: Book[]) => {
        console.log('Books retrieved from server:', data);
        this.books = data;  // Update the books array with the retrieved data
        this.index++
      }));
  };
  
  createBook(newBook:Book){
    return this.http
    .post(`${this.serverUrl}/books`, newBook)
    .pipe(tap((x)=> console.log('creating', x)))
  }

  updateBook(updatedBook:Book){
    return this.http
    .put(`${this.serverUrl}/books/${updatedBook.id}`, updatedBook)
    .pipe(tap((x)=> console.log('updating', x)))
  }

  deleteBook(bookId:number){
    console.log('deleting book: ' + bookId)
    return this.http
    .delete(`${this.serverUrl}/books/${bookId}`)
    .pipe(tap((x: any)=> console.log('after delete: ', x)))
  }

  //This is kept for debugging purposes
  getBooksOffline = () =>{
    console.log(`$Book service is returning books: ${this.books}`)
    return this.books
  }

  setStoredBook(book:Book){
    this.storedBook = book;
  }

  getStoredBook(){
    let book = this.storedBook
    this.storedBook = undefined
    return book
  }
}
