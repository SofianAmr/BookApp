import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Book } from '../model/book.model';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class BookService {  
  
  constructor(private http: HttpClient) { }  
  baseUrl: string = 'http://localhost:3000/books/';  
  
  getBooks() {  
    return this.http.get<Book[]>(this.baseUrl);  //Get all books
  } 
  getBookById(id: number) {  
    return this.http.get<Book>(this.baseUrl + '/' + id);  
  } 
}  