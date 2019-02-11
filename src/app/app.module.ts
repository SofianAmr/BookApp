import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { ReactiveFormsModule } from "@angular/forms";  
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookService } from './service/book.service';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
  ],
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule  
  ],  
  providers: [BookService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  