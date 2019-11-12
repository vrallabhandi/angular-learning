import { Component, OnInit } from '@angular/core';
import { Book } from './book/book.component';
import { BookService } from './services/book-service.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learning';
  books: Book[] = [];
  user: any;

  constructor(
    private bookService: BookService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookService.clickCount.subscribe(val => console.log(val));
  }

  onBookClicked(bookName) {
    console.log(`${bookName} clicked`);
  }

  getRandomUser() {
    this.usersService.getRandomUser().subscribe((user: any) => {
      console.log(user);
      this.user = user;
    });
  }
}
