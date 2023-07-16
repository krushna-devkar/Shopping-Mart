import { Component, EventEmitter, Input,Output,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shopping } from 'src/shared/service/product.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() product : any;
  @ViewChild('shopImg') shopImg :any;
  @ViewChild('shopName') shopName :any;
  @ViewChild('shopQty') shopQty :any;
  @ViewChild('shopPrice') shopPrice :any
  @Output() tellToParentShopping = new EventEmitter()
  counter : number = 0;
  shopService: any;
  constructor( private route: ActivatedRoute){}
  @Input() Product: any;
  productList  :Shopping[] = [];

  plus(){
    this.counter +=1;
  }
minus(){
    if(this.counter >1){
      this.counter -=1;
    }
  }

    addToBag(){
      
    }
  }
 
