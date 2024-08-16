import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {
    /*
    create an array of blogs, the blog will have an 
    id:number, 
    title:string,
    description:string, 
    author:string, and 
    comments:string[] field
    */

    blogForm:FormGroup;
    commentsFormArray:FormArray;

    constructor(private fb: FormBuilder, private blogService:BlogService){
      let storedBlog = blogService.getCalledBlog()
      
      this.blogForm = this.fb.group({
        title: new FormControl(storedBlog?.title ?? ''),
        description: new FormControl(storedBlog?.description ?? ''), 
        author: new FormControl(storedBlog?.author ?? ''),
        comments: this.fb.array(storedBlog?.comments ?? []), // Initialize FormArray      
      });
      this.commentsFormArray = this.blogForm.controls['comments'] as FormArray;
    }
  
    ngOnInit(): void {}
  
  
    addComment = () => {
      this.commentsFormArray.controls.push(new FormControl(''));
    };
  
    deleteComment = (index: number) => {
      this.commentsFormArray.removeAt(index);
    };
}
