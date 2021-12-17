import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public productTotal : number = 0; 

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((resp)=>{
      this.product = resp;

      this.productTotal = this._cartService.getTotalPrice()
    })
  }
  removeItem(item:any){
    this._cartService.removeCartItem(item);
  }
  removeAll(){
    this._cartService.removeAllCarItem();
  }
  checkout(){
    alert("**This functionality not added***");
  }
}
