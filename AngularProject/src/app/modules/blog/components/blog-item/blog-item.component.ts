import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input('blogInput') blog:Blog|undefined

  edit = (blogId:number) =>{
    console.log(`$Blog ${blogId} gets edited!`)
  }
  
  delete = (blogId:number) =>{
    console.log(`$blogId ${blogId} gets deleted!`)
  }
}
