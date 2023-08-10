import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm : any;
  url: any

  constructor( private productServe : ProductService ,private http : HttpClient){}

  ngOnInit(): void {
      this.productForm = new FormGroup({
        pName : new FormControl('',Validators.required),
        pImg : new FormControl('', Validators.required),
        pPrice : new FormControl('',Validators.required),
        pQty : new FormControl(0),
      })
  }

  imageUpload(event : any){
     const file = event.currentTarget.files[0];
    const imgUpload = new FileReader();
    if(file.size < 100 * 1024){
      imgUpload.onload = (event : any)=>{
        this.url = event.target.result;
      }
      imgUpload.readAsDataURL(file)
    }else{
      alert("image size should be less than 100kb")
    }
      
  }


  onSubmit(){

    let prod = this.productForm.value;
    console.log(prod)
    let newProduct = new Product(prod.pName, prod.pQty, prod.pPrice, this.url)
    this.productServe.addNewProductToList(newProduct);
    this.productForm.reset();
  }
}
