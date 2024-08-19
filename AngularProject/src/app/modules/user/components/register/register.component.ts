import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  profileForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.profileForm = this.fb.group({
      email:["derekroi002@gmail.com", [Validators.email, Validators.required]],
      name:["Derek Roi T. Bautista", [Validators.required]],
      bio:["bio bio bio bio bio bio bio bio bio bio bio",[Validators.maxLength(200)]]
    })
  }
  ngOnInit(): void {

  }
}
