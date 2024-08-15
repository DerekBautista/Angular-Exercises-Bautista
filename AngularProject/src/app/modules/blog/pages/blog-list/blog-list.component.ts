import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  
  constructor(private blogService:BlogService){}
  blogs:Blog[] = this.blogService.getBlogs()
  
  handleEvent($event:any){
    console.log($event)
  }
}
