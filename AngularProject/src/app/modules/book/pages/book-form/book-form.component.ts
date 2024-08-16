import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/modules/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit{

  bookForm: FormGroup;
  authorFormArray: FormArray;

  /**
   * Book Class
   * 
   *     id:number,
        name:string,
        authors:string[],
        isbn:string
        
   */
  constructor(private fb: FormBuilder, private bookService:BookService){
    let storedBook:Book = bookService.getCalledBook()
    this.bookForm = this.fb.group({
      name: new FormControl(storedBook?.name??''),
      authors: this.fb.array(storedBook?.authors??[]), // Initialize FormArray
      isbn: new FormControl(storedBook?.isbn??''),      
    });
    this.authorFormArray = this.bookForm.controls['authors'] as FormArray;
  }

  ngOnInit(): void {}


  addAuthor = () => {
    this.authorFormArray.controls.push(new FormControl(''));
  };

  deleteAuthor = (index: number) => {
    this.authorFormArray.removeAt(index);
  };


  //when you put a get, angular knows it needs to return
  get firstName(){
    return this.bookForm.get('name') as FormControl
  }

}
