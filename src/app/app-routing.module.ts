import { EditformComponent } from './editform/editform.component';
import { AdminComponent } from './admin/admin.component';
import { LoadingComponent } from './loading/loading.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { NavsearchComponent } from './navsearch/navsearch.component';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { ItemsComponent } from './items/items.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'navsearch', component: NavsearchComponent },
  { path: 'cakedetails/:cakeid', component: CakedetailsComponent },
  { path: 'cart',component: CartComponent },
  
  { path: 'checkout', children:[{ path: '', component: SummaryComponent }, {path: 'address', component: AddressComponent}, {path: 'payment', component: PaymentComponent}, {path: 'confirm', component: ConfirmorderComponent}], component: CheckoutComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
