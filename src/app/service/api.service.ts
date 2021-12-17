import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl="https://fakestoreapi.com/products/"

  constructor(private _http:HttpClient) { }

  getProductData(){
   return this._http.get<any>(this.apiUrl)
  }

  productDetails(id:any){
    return this._http.get<any>(this.apiUrl+""+id)
  }

  getProductByCategory(category:String){
      return this._http.get<any>(this.apiUrl).pipe(
        map(res=>res.filter( (product:any) => product.category.includes(category))
    ))
    
  }

}
