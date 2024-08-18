import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBooks(): import("rxjs").Observable<Object> {
    throw new Error('Method not implemented.');
  }

  // id:number,
  // title:string,
  // description:string,
  // author:string,
  // comments:string[]
  index:number = -1
  blogs:Blog[] = []
  // [
  //   {
  //     id:0,
  //     title:"Can someone be absolutely 'built different'?",
  //     description:"This blog talks about if a person A will always be better than person B no matter how much person B tries?",
  //     author:"Morgan Freeman",
  //     comments:["What a wonderful blog", "Very informative, but I disagree on some points"],
  //   },
  //   {
  //     id:1,
  //     title:"Advanced Angular Techniques",
  //     description:"Exploring advanced concepts and techniques in Angular.",
  //     author:"Bob Smith",
  //     comments:["This is exactly what I was looking for.", "Could you add more examples?"]
  //   },
  //   {
  //     id: 2,
  //     title: "The Marvel Cinematic Universe: Phase 5",
  //     description: "A deep dive into the upcoming movies and shows in the MCU's Phase 5.",
  //     author: "Stan Lee Jr.",
  //     comments: ["Can't wait for the new Spider-Man movie!", "Phase 5 is going to be epic!"]
  //   },
  //   {
  //     id:3,
  //     title: "The Evolution of Video Games",
  //     description: "From Pong to VR: How video games have evolved over the decades.",
  //     author: "GamerX",
  //     comments: ["This brings back so many memories.", "The VR section is fascinating!"]
  //   },
  //   {
  //     id:4,
  //     title: "The Rise of K-Pop",
  //     description: "An exploration of how K-Pop took the world by storm.",
  //     author: "HallyuFan",
  //     comments: ["BTS and BLACKPINK are unstoppable!", "The global influence of K-Pop is incredible."]
  //   }
  // ]

  private serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  storeCalledBlog(index:number){
    this.index = index;
  }

  getCalledBlog(){
    let blog:Blog = this.blogs[this.index]
    this.index = -1
    return blog
  }

  getBlogs = () => {
    return this.http
      .get<Blog[]>(`${this.serverUrl}/blogs`)
      .pipe(tap((data) => {
        console.log('Books retrieved from server:', data);
        this.blogs = data;  // Update the books array with the retrieved data
      }));
  }

  getBlogsOffline = () =>{
    console.log(`$Blog Service is returning blogs ${this.blogs}`)
    return this.blogs
  }

}
