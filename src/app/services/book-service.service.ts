import { Book } from '../book/book.component';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  clickCount: Subject<number> = new Subject();

  getBooks(): Book[] {
    return [
      {
        name: 'BoOK 1',
        author: 'Author 1'
      },
      {
        name: 'Book 2',
        author: 'Author 2'
      },
      {
        name: 'Book 3',
        author: 'Author 3'
      }
    ];
  }
}
