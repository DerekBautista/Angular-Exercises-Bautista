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
  blogs:Blog[] | undefined
  constructor(private blogService:BlogService, private route:ActivatedRoute){
    this.blogs = this.route.snapshot.data['blogs']
  }
  
  handleEvent($event:any){
    console.log("Event emmited:" + $event)
  }


  edit = (blogId:number) =>{
    console.log(`$Blog ${blogId} gets edited!`)
    this.blogService.storeCalledBlog(blogId);
  }
  
  delete = (blogId:number) =>{
    console.log(`$blogId ${blogId} gets deleted!`)
  }

}
