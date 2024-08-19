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
//THE IMPLEMENT <DataType> SHOULD BE THE SAME AS Observable<DataType>
//some reason its better I just put "any"
export class BookResolver implements Resolve<Book[]> {
  constructor(private bookService: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book[]> {
    // return of(['Jose', 'Mike']);
    // debugger
    //the method in bookService should specify its return type
    return this.bookService.getBooks();
  }
}