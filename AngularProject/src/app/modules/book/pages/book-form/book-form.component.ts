import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/modules/models/book';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit{

  bookForm: FormGroup;
  authorFormArray: FormArray;
  isEditing = true;

  constructor(private fb: FormBuilder, private bookService:BookService, private router:Router){
    let storedBook:Book | undefined = bookService.getStoredBook()
    this.isEditing = storedBook ? true : false;
    this.bookForm = this.fb.group({
      id: storedBook?.id?? '',
      name: new FormControl(storedBook?.name??''),
      authors: this.fb.array(storedBook?.authors??[]), // Initialize FormArray
      isbn: new FormControl(storedBook?.isbn??''),      
    });
    this.authorFormArray = this.bookForm.controls['authors'] as FormArray;
  }

  ngOnInit(): void {}
  createBook(){
    let newBook = {
      id: this.bookForm.get('id')?.value,
      name: this.bookForm.get('name')?.value,
      authors: this.authorFormArray.getRawValue() as string[],
      isbn: this.bookForm.get('isbn')?.value
    }
    this.bookService.createBook(newBook).subscribe((data)=> {
      console.log(data)
      this.router.navigate(['/book'])
    })
  }

  editBook(){
    let updatedBook = {
      id: this.bookForm.get('id')?.value,
      name: this.bookForm.get('name')?.value,
      authors: this.authorFormArray.getRawValue() as string[],
      isbn: this.bookForm.get('isbn')?.value
    }
    this.bookService.updateBook(updatedBook).subscribe((data)=> {
      console.log(data)
      this.router.navigate(['/book'])
    })
  }

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
