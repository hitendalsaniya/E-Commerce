import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'search/:searchTerm',component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'category/:category', component:ProductsComponent},
  {path:'products/:id', component:ProductdetailComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
