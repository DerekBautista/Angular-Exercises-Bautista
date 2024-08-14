import { Injectable } from '@angular/core';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[] =[
    {
      id:11111,
      name:"Harry Potter",
      authors:['J.K. Rowling'],
      isbn:'111111111X'
    },
    {
      id:22222,
      name:"Percy Jackson",
      authors:["Rick Riordan"],
      isbn:"222222222X"
    },
    {
      id:33333,
      name:"Derek's Web",
      authors:["Derek Roi T. Bautista", "Alice Guo", "Carlos Yulo"],
      isbn:"333333333X"
    }
  ]

  constructor() { }

  getBooks = () =>{
    console.log(`$Book service is returning books: ${this.books}`)
    return this.books
  }
}
