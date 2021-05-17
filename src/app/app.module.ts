import { AuthinterceptService } from './authintercept.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ItemstyleDirective } from './itemstyle.directive';
import { EgglessDirective } from './eggless.directive';
import { SearchDirective } from './search.directive';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { NavsearchComponent } from './navsearch/navsearch.component';
import { NavsearchDirective } from './navsearch.directive';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoadingComponent } from './loading/loading.component';
import { AdminComponent } from './admin/admin.component';
import { EditformComponent } from './editform/editform.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersComponent } from './orders/orders.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ItemsComponent,
    LoginComponent,
    SignupComponent,
    UserlistComponent,
    AdduserComponent,
    NavbarComponent,
    SliderComponent,
    ItemstyleDirective,
    EgglessDirective,
    SearchDirective,
    ForgetComponent,
    HomeComponent,
    NavsearchComponent,
    NavsearchDirective,
    CakedetailsComponent,
    CartComponent,
    CheckoutComponent,
    LoadingComponent,
    AdminComponent,
    EditformComponent,
    FooterComponent,
    OrdersComponent,
    SummaryComponent,
    AddressComponent,
    PaymentComponent,
    ConfirmorderComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthinterceptService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
