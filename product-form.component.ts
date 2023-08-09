import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm : any;
  url: any

  constructor( private productServe : ProductService){}

  ngOnInit(): void {
      this.productForm = new FormGroup({
        pName : new FormControl('',Validators.required),
        pImg : new FormControl('', Validators.required),
        pPrice : new FormControl('',Validators.required),
        pQty : new FormControl(0),
      })
  }

  


  onSubmit(){

    let prod = this.productForm.value;
    console.log(prod)
    let newProduct = new Product(prod.pName, prod.pQty, prod.pPrice, this.url)
    this.productServe.addNewProductToList(newProduct);
    this.productForm.reset();
  }
}
