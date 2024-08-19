import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from 'src/app/modules/models/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {

    blogForm:FormGroup;
    commentsFormArray:FormArray;
    isEditing = true;

    constructor(private fb: FormBuilder, private blogService:BlogService, private router:Router){
      let storedBlog:Blog | undefined = blogService.getCalledBlog()
      this.isEditing = storedBlog ? true:false      
      this.blogForm = this.fb.group({
        id: storedBlog?.id?? '',
        title: new FormControl(storedBlog?.title ?? ''),
        description: new FormControl(storedBlog?.description ?? ''), 
        author: new FormControl(storedBlog?.author ?? ''),
        comments: this.fb.array(storedBlog?.comments ?? []), // Initialize FormArray      
      });
      this.commentsFormArray = this.blogForm.controls['comments'] as FormArray;
    }
  
    ngOnInit(): void {}
  
    createBlog(){
      let newBlog = {
        id: this.blogForm.get('id')?.value,
        title: this.blogForm.get('title')?.value,
        description: this.blogForm.get('description')?.value,
        author: this.blogForm.get('author')?.value,
        comments: this.commentsFormArray.getRawValue() as string[]
      }

      this.blogService.createBlog(newBlog).subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/blog'])
      })
    }

    editBlog(){
      let updatedBlog = {
        id: this.blogForm.get('id')?.value,
        title: this.blogForm.get('title')?.value,
        description: this.blogForm.get('description')?.value,
        author: this.blogForm.get('author')?.value,
        comments: this.commentsFormArray.getRawValue() as string[]
      }
      this.blogService.updateBlog(updatedBlog).subscribe((data) => {
        console.log(data)
        this.router.navigate(['/blog'])
      })
    }

    addComment = () => {
      this.commentsFormArray.controls.push(new FormControl(''));
    };
  
    deleteComment = (index: number) => {
      this.commentsFormArray.removeAt(index);
    };
}
