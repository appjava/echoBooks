import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Personal Librarie App';

  books:Book[] = [
    {id:1, title:'Frontera Oscura', author:'Sabino Cabeza', genere:'Fiction', pages:"300", status:'Finished'},
    {id:2, title:'Time Machine', author:'H. Wells', genere:'Fiction', pages:"200", status:'Waiting'}
  ];

  selectBook: Book = new Book();
  
  addBook(){
    if(this.selectBook.title !== ""){
      this.selectBook.id = this.books.length + 1;
      this.books.push(this.selectBook);
    }
    else{
      confirm('Enter Title to Create New Book');
    }
    
    this.selectBook = new Book();
  }
  UpBook(){
    if(this.selectBook.id === 0){
      this.selectBook.id = this.books.length + 1;
      this.books.push(this.selectBook);
    }
    
    this.selectBook = new Book();
  }
  editBook(book: Book){
    this.selectBook = book;
  }
  deleteBook(){
    if(confirm('Delete Book, Sure?')){
      this.books = this.books.filter(x => x != this.selectBook);
      this.selectBook = new Book();
    }
    else{
      //this.selectBook = new Book();
    }
    
  }

  exportBook():void{

  }
}
