import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,  } from 'rxjs/operators';
import { BookService } from './book-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private bookService: BookService) {}

  getRandomUser() {
    this.bookService.clickCount.next(4);
    return this.http
      .get('https://randomuser.me/api/')
      .pipe(
        map(({ results }: any) => results),
        map(([user]) => user)
      );
  }
}
