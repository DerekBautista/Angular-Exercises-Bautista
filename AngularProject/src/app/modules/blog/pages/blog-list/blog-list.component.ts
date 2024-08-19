import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from 'src/app/modules/models/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogs:Blog[] = []

  
  constructor(private blogService:BlogService, private route:ActivatedRoute){
    this.getBlogList()
  }
  
  handleEvent($event:any){
    console.log("Event emmited:" + $event)
    if($event == 'DELETE ALL'){
      this.deleteAll()
    }
  }

  editBlog = (i:number) =>{
    let blog = this.blogs[i]
    this.blogService.setStoredBlog(blog);
  }

  deleteAll = () => {
    console.log('Deleting all blogs')
    if(this.blogs){
      for(let blog of this.blogs){
        this.deleteBlog(blog.id)
      }
    }
    else{
      console.log('No data in blogs.')
    }
  }
  
  getBlogList(){
    this.blogService.getBlogs().subscribe((data: Blog[]) =>
    this.blogs = data)
  }

  deleteBlog = (blogId:number) =>{
    this.blogService
    .deleteBlog(blogId)
    .subscribe((data: { id: any; }) => {
      console.log(`Blog ${data.id} gets deleted!`)
      this.getBlogList()
    })
  }

}
