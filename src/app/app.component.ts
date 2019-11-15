import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from './book/book.component';
import { BookService } from './services/book-service.service';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learning';
  books: Book[] = [];
  user: any;
  user$: Observable<any>;
  name = 'abc';
  reactiveName: FormControl;

  @ViewChild('f', { static: true }) myForm: NgForm;

  constructor(
    private bookService: BookService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookService.clickCount.subscribe(val => console.log(val));

    this.reactiveName = new FormControl('abcd', Validators.required);
    this.reactiveName.valueChanges.subscribe(console.log);
  }

  onBookClicked(bookName) {
    console.log(`${bookName} clicked`);
  }

  getRandomUser() {
    // this.usersService.getRandomUser().subscribe((user: any) => {
    //   this.user = user;
    // });
    this.user$ = this.usersService.getRandomUser();
  }

  onFormSubmit() {
    // console.log(this.myForm);
    console.log(this.reactiveName.errors);
  }
}
