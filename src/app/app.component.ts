import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'EchoBooks Bitacora';
  mensaje:string = 'Aquí Alerta';

  books = [
    {'title':'Frontera Oscura', 'author':'Sabino Cabeza', 'genere':'Fiction', 'pages':300, 'status':'Finished'}
  ];
  
  model:any = {};
  model2:any = {};

  addBook():void{
    this.books.push(this.model);
  }
  deleteBook():void{

  }
  updateBook():void{
    
  }
  orderBook():void{

  }
  exportBook():void{

  }
}
