import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Books} from '../books'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
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
