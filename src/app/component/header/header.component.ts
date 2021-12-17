import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'E-Shope';
  
  public totalCartItem : number=0;
  public searchTerm : String="";

  constructor(private _cartService:CartService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    //searchTerm Code
    this._route.params.subscribe((params:any)=>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
      console.log(this.searchTerm)
    })

    // cart itme code
    this._cartService.getProducts().subscribe((res : any)=>{
      this.totalCartItem = res.length;
    })
  }

  search(){
    if(this.searchTerm)
    this._router.navigateByUrl('/search/' + this.searchTerm)
  }
}
