import { Component, Input } from '@angular/core';
import { Product } from 'src/shared/model/product.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input()  set newProdSetter( catchedData : any){
    //console.log(catchedData)
    if(catchedData){
      this.productList.push(catchedData)
    }
  };

  
  
  productList = [
    new Product('https://m.media-amazon.com/images/I/71YsDkOR8pL._SY741_.jpg','Olive Oil Jar',5,'1369'),
    new Product('https://m.media-amazon.com/images/I/61LT11Qc72S._SX679_.jpg','Almonds', 1,'940'),
    new Product('https://m.media-amazon.com/images/I/61-pk2U6Z5L._SX679_.jpg','Chana Dal ',1,'280'),
  ] ;
}
