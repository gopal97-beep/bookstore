import { Component, OnInit } from '@angular/core';
import{Books} from '../books';
import {DataService} from '../data.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id:number;
  title:string;

  price:number;
  total1:number;
  
  newbook1:Books[]=[];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.newbook1=this.svc.books;
    console.log(this.newbook1);
    this.total1=this.svc.total;
  }

}
