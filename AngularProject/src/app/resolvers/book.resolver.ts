import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { BookService } from '../modules/book/services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../modules/models/book';

// export const bookResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };
@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<Object> {
  constructor(private bookService: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Object> {
    // return of(['Jose', 'Mike']);
    // debugger
    return this.bookService.getBooks();
  }
}