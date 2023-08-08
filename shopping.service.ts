
import { Product } from "../model/product.model";


export class ShoppingService {
  ShoppingBag: Product[] = [];

  addToBag(product: Product) {
    const productInBag = this.ShoppingBag
                    .find(({pName}) => pName === product.pName);
    if (!productInBag) {
      this.ShoppingBag.push({...product});
      return;
    }else{
      productInBag.pPrice =  productInBag.pPrice *  productInBag.pQty;
      productInBag.pQty += product.pQty;
    }
  }

  
  getProducts() {
    return this.ShoppingBag;
  }

  emptyBag() {
    this.ShoppingBag = [];
    return this.ShoppingBag;
  }

}
