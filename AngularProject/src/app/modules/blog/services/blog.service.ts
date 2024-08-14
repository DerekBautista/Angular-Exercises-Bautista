import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // id:number,
  // title:string,
  // description:string,
  // author:string,
  // comments:string[]

  blogs:Blog[] = [
    {
      id:1,
      title:"Can someone be absolutely 'built different'?",
      description:"This blog talks about if a person A will always be better than person B no matter how much person B tries?",
      author:"Morgan Freeman",
      comments:["What a wonderful blog", "Very informative, but I disagree on some points"],
    },
    {
      id:2,
      title:"Advanced Angular Techniques",
      description:"Exploring advanced concepts and techniques in Angular.",
      author:"Bob Smith",
      comments:["This is exactly what I was looking for.", "Could you add more examples?"]
    },
    {
      id: 3,
      title: "The Marvel Cinematic Universe: Phase 5",
      description: "A deep dive into the upcoming movies and shows in the MCU's Phase 5.",
      author: "Stan Lee Jr.",
      comments: ["Can't wait for the new Spider-Man movie!", "Phase 5 is going to be epic!"]
    },
    {
      id:4,
      title: "The Evolution of Video Games",
      description: "From Pong to VR: How video games have evolved over the decades.",
      author: "GamerX",
      comments: ["This brings back so many memories.", "The VR section is fascinating!"]
    },
    {
      id:5,
      title: "The Rise of K-Pop",
      description: "An exploration of how K-Pop took the world by storm.",
      author: "HallyuFan",
      comments: ["BTS and BLACKPINK are unstoppable!", "The global influence of K-Pop is incredible."]
    }
  ]

  constructor() { }

  getBlogs = () =>{
    console.log(`$Blog Service is returning blogs ${this.blogs}`)
    return this.blogs
  }
}
