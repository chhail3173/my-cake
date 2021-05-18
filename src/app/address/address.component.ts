import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { deactivate } from '../authdeactivateguard.service';
import { CommonserviceService } from '../commonservice.service';
import { LoadingintercepterService } from '../loadingintercepter.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements deactivate {
  cakeid: any;
  checkoutDetails: any = {};
  checkoutCart: any = [];
  totalPrice: any;
  public showOverlay = true;
  // ingrediants:any = [];

  constructor( private cs: CommonserviceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private intercept: LoadingintercepterService,private toast:ToastrService) { 
      this.cartItems();
    }

  ngOnInit(): void {
  }

  canDeactivate(){
    return confirm("please check your fields carefully");
  }

  orderNow() {
    if(!this.checkoutDetails.name || !this.checkoutDetails.address ||!this.checkoutDetails.pincode || !this.checkoutDetails.phone || !this.checkoutDetails.city || !this.checkoutDetails.price){
      this.toast.error( "please fill all fields","",{timeOut:2000});

    } else {
      this.cs.orderDetail = this.checkoutDetails;
      this.router.navigate(['checkout/confirm']); 
    }
   
    // this.router.navigate(['./confirm'], {relativeTo: this.route}); 
    // console.log(this.checkoutDetails);

    // let apiUrl = this.cs.URL + "addcakeorder";
    // this.http.post(apiUrl, this.checkoutDetails).subscribe(
    //   (response: any) => {
    //     console.log(response);
        
    //   },

    //   (error: any) => {
    //     console.log("this is response" + error);
    //   }
    // );

  }

  cartItems() {
    let apiUrl = this.cs.URL + "cakecart";
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
        this.checkoutCart = response.data;
        this.checkoutDetails["cakes"] = response.data;
        this.checkoutDetails.price = response.data.reduce(
          (acc: any, value: any) => acc + value.price,
          0
        );
        this.showOverlay = false;
      },

      (error: any) => {
        console.log("this is response" + error);
      }
    );
  }

}
