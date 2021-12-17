import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { parseMessage } from '@angular/localize/src/utils';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any = [];
  public productDatails : any = []

  constructor(private _api:ApiService,
     private cartService:CartService,
      private _route:ActivatedRoute,
      private _router:Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{ // search bar code using if and else condition to display search item.
      if(params.searchTerm){  
        this._api.getProductData().subscribe((respon:any)=>{
          this.productList = respon.filter((product:any)=>{
            return product.title.toLowerCase().includes(params.searchTerm.toLowerCase())})
        
            // below two line is cart item code 
          this.productList.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.price})  
            });
          });
          
      }else if(params.category){ //this method for category
        this._api.getProductByCategory(params.category).subscribe((resp)=>{
          this.productList = resp
        })

        // below two line is cart item code 
        this.productList.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
        })

        
      }
      else{
        this._api.getProductData().subscribe((respones)=>{
          this.productList = respones;
          
          // below two line is cart item code 
          this.productList.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.price})
          })
        })
      }
    })

    
  }
  
  // this is a add to cart function
  addtoCart(product:any){
    this.cartService.addtoCart(product)
  }

  //product Detial

  productDetial(id:any){
    this._router.navigate(['./products/',id])
  }

}
