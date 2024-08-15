import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit{

  bookForm: FormGroup;
  //authorArray: FormArray;

  /**
   * Book Class
   * 
   *     id:number,
        name:string,
        authors:string[],
        isbn:string
        
   */
  constructor(private fb: FormBuilder){
    this.bookForm = this.fb.group({
      name: new FormControl(''),
      authors: this.fb.array([]), // Initialize FormArray
      isbn: new FormControl('')
    })
  }

  ngOnInit(): void {}

  name:FormControl = new FormControl()
  authors:FormArray = new FormArray([this.name])
  isbn:FormControl = new FormControl()

}
