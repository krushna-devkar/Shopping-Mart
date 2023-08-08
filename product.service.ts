
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../model/product.model";

export class ProductService{


  constructor(){}

  private productList = [
    new Product('Umbrella', 1, 799,'https://m.media-amazon.com/images/I/619uaAz+T1L._UX679_.jpg'),
    new Product('Saregama Carvaan', 1, 2190, 'https://m.media-amazon.com/images/I/81pjVz24fVL._SX522_.jpg'),
    new Product('Smartwatch', 1, 1699, 'https://m.media-amazon.com/images/I/61NavJQtm1L._SX522_.jpg'),

  ];

  productSub = new BehaviorSubject(this.productList.slice());

  getProductList(){
    return this.productList.slice();
  }

  addNewProductToList( newProd : Product){
    this.productList.push(newProd)
    this.productSub.next(this.productList.slice())
  }

  
}
