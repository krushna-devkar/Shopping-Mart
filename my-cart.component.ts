import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/shared/model/product.model';
import { Shopping } from 'src/shared/service/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{
  productList!: Shopping[];
@Output ()shoppingDelete :EventEmitter<Shopping> = new EventEmitter()

    constructor(){
       

    }
    onClick(productList  :Shopping){

    }
    // priceTotal(){
    //   return this.shoppingList.reduce((acc, list) => acc+= list.price * list.qty ,0)
    //  }

    //  deleteProduct(shopping: any) {
    //   this.shoppingList = this.shoppingList.filter(this.)
    // }

    ngOnInit(): void {
        
    }

    shoppingList=[
      new Shopping('https://m.media-amazon.com/images/I/71YsDkOR8pL._SY741_.jpg','Olive Oil Jar',5,'1369'),
      new Shopping('https://m.media-amazon.com/images/I/61LT11Qc72S._SX679_.jpg','Almonds', 1,'940'),
      new Shopping('https://m.media-amazon.com/images/I/61-pk2U6Z5L._SX679_.jpg','Chana Dal ',1,'280'),
    ]
    // Assuming you have an array of items

    


    removeProduct(rowId : number){
    }
}
