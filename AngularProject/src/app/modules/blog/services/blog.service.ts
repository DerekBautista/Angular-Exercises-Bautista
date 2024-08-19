import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  index:number = 10
  blogs:Blog[] = []
  storedBlog:Blog | undefined

  private serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  getBlogs = ():Observable<Blog[]> => {
    return this.http
      .get<Blog[]>(`${this.serverUrl}/blogs`)
      .pipe(tap((data:Blog[]) => {
        console.log('Books retrieved from server:', data);
        this.blogs = data;  // Update the books array with the retrieved data
        
      }));
  }

  createBlog(newBlog:Blog){
    newBlog.id = this.index.toString()
    return this.http
    .post(`${this.serverUrl}/blogs`, newBlog)
    .pipe(tap((x)=> {
      console.log('creating', x)
      this.index++
    }))
  }

  updateBlog(updatedBlog:Blog){
    return this.http
    .put(`${this.serverUrl}/blogs/${updatedBlog.id}`, updatedBlog)
    .pipe(tap((x)=> console.log('updating', x)))
  }

  deleteBlog(blogId:number){
    console.log('deleting book: ' + blogId)
    return this.http
    .delete(`${this.serverUrl}/blogs/${blogId}`)
    .pipe(tap((x: any)=> console.log('after delete: ', x)))
  }

  getBlogsOffline = () =>{
    console.log(`$Blog Service is returning blogs ${this.blogs}`)
    return this.blogs
  }

  setStoredBlog(blog:Blog){
    this.storedBlog = blog
  }

  getCalledBlog(){
    let blog = this.storedBlog
    this.storedBlog = undefined
    return blog
  }
}
