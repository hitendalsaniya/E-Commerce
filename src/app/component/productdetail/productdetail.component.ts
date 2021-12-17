import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public productDatails : any =[]

  constructor(private _route:ActivatedRoute ,private _http:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id')
    this._http.productDetails(id).subscribe((res)=>{
      this.productDatails = res;

    })
  }
  // this is a add to cart function
  addtoCart(product:any){
    this.cartService.addtoCart(product)
  }

}
