import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() {
    // console.log(this.book.name);
  }

  ngOnInit() {
    // console.log(this.book.name);
    // this.name = 'Book 1';
    // this.author = 'Author 1';
  }

  onNameClicked() {
    this.clicked.emit(this.book.name);
  }
}
