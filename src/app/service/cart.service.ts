import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject([])

  constructor() { }

  getProducts(){
   return this.productList.asObservable();
  }
  setProducts(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    
  }
  getTotalPrice():number{
    let allTotal = 0;
    this.cartItemList.map((a : any)=>{
      allTotal += a.total
    })
    return allTotal
  }
  removeCartItem(product : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCarItem(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
