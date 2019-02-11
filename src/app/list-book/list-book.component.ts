import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BookService } from '../service/book.service';  
import { Book } from '../model/book.model';  
import { Router } from "@angular/router";  

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book[];  
  headElements = ['id', 'title', 'author', 'editor', 'type', 'pages'];
  
  constructor(private bookService: BookService, private router: Router, ) { }  
  
  ngOnInit() {  
    // for (let i = 1; i <= 15; i++) {
    //   this.books.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    // }

    this.bookService.getBooks()  
      .subscribe((data: Book[]) => {  
        this.books = data;  
      });  
  } 
}  


