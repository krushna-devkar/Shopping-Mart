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
      if(file.type == 'image/png' && file.size < 1024*100){
        const formObj = new FormData();
      formObj.append('file',file);
      this.http.post("https://source.unsplash.com/random",formObj).subscribe((res  :any)=>{

      })
      }else{
        if(file.size >1024*100){
          alert("image size should be 100kb")
        }
        alert("only png files are allowed")
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
