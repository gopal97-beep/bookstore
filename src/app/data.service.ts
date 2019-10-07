import { Injectable } from '@angular/core';
import {Books} from './books';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  books:Books[]=[];
 
  comments:string;
  id:number=1;
  
  
  title:string;
  author:string;
  price:number;
  newbook:Books;
  total:number=0;
  


  constructor() { }
  create(b:Books){
   this.title="lol"
    this.price=150;
    b.title=this.title;
    b.price=this.price;
    this.total+=b.price;
   
    
    this.books.push(b);
    console.log(this.books)
  }
  add1(b:Books){
    b.id=this.id;
    b.id=1;
    this.title="The Alchemist"
    this.price=150;
    b.title=this.title;
    b.price=this.price;
    
    this.total+=b.price;
    
    this.books.push(b);


  }
  add2(c:Books){
    c.id=this.id;
    c.id=2;
    this.title="The Great Gatsby"
    this.price=150;
    c.title=this.title;
    c.price=this.price;
    this.total+=c.price;
    
    this.books.push(c);


  }
  add3(a:Books){
    a.id=this.id;
    a.id=3;
    this.title="1984"
    this.price=180;
    a.title=this.title;
    a.price=this.price;
    this.total+=a.price;
    
    this.books.push(a);


  }
  add4(d:Books){
    d.id=this.id;
    d.id=4;
    this.title="The old man and the sea"
    this.price=200;
    d.title=this.title;
    d.price=this.price;
    this.total+=d.price;

    
    this.books.push(d);


  }
  add5(e:Books){
    e.id=this.id;
    e.id=4;
    this.title="The Hobbit there and back again"
    this.price=300;
    e.title=this.title;
    e.price=this.price;
    this.total+=e.price;

    
    this.books.push(e);


  }

  
}
