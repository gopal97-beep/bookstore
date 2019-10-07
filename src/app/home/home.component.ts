import { Component, OnInit } from '@angular/core';
import{Books} from '../books';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
books:Books[]=[];
id:number;
title:string;
newbook1:Books;
newbook2:Books;
newbook3:Books;
newbook4:Books;
newbook5:Books;

price:number;
  constructor(private svc:DataService) { }

  ngOnInit() {
    
  }

  createBooks1(){
    this.newbook1=new Books(this.id, this.title, this.price);
    
    
    this.svc.add1(this.newbook1);
    
   
  }
  createBooks2(){
    this.newbook2=new Books(this.id, this.title, this.price);
    this.svc.add2(this.newbook2);

  }
  createBooks3(){
    this.newbook3=new Books(this.id, this.title, this.price);
    this.svc.add3(this.newbook3);

  }
  createBooks4(){
    this.newbook4=new Books(this.id, this.title, this.price);
    
    this.svc.add4(this.newbook4);

  }
  createBooks5(){
    this.newbook5=new Books(this.id, this.title, this.price);
    
    this.svc.add5(this.newbook5);

  }



}
