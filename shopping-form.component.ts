import { Component , EventEmitter, Output, ViewChild } from '@angular/core';
import { Product } from 'src/shared/model/product.model';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  @ViewChild('prodImg') prodImg :any;
  @ViewChild('prodName') prodName :any;
  @ViewChild('prodQty') prodQty :any;
  @ViewChild('prodPrice') prodPrice :any;
  @Output() tellToParentShopping = new EventEmitter()

  
  createProduct(){
    //console.log('trigger')
    const newProd = new Product(
      this.prodImg.nativeElement.value,
      this.prodName.nativeElement.value,
      this.prodQty.nativeElement.value,
      this.prodPrice.nativeElement.value
    )
    //console.log(newProd)
    this.tellToParentShopping.emit(newProd)
  }
}
