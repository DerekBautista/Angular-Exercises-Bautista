import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { BlogService } from '../modules/blog/services/blog.service';
import { Observable } from 'rxjs';

// export const blogResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root',
})
//any could also work
export class BlogResolver implements Resolve<any> {
  constructor(private blogService: BlogService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // return of(['Jose', 'Mike']);
    // debugger
    return this.blogService.getBlogs();
  }
}