import { LoadingintercepterService } from "./../loadingintercepter.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router, RouterEvent } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CommonserviceService } from "../commonservice.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {

  constructor(
    private cs: CommonserviceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private intercept: LoadingintercepterService
  ) {
   
  }

  ngOnInit(): void {}

  // orderNow() {
  //   console.log(this.checkoutDetails);

  //   let apiUrl = this.cs.URL + "addcakeorder";
  //   this.http.post(apiUrl, this.checkoutDetails).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.router.navigate(["/orders"]);
  //     },

  //     (error: any) => {
  //       console.log("this is response" + error);
  //     }
  //   );

  // }

  // cartItems() {
  //   let apiUrl = this.cs.URL + "cakecart";
  //   this.http.post(apiUrl, {}).subscribe(
  //     (response: any) => {
  //       this.checkoutCart = response.data;
  //       this.checkoutDetails["cakes"] = response.data;
  //       this.checkoutDetails.price = response.data.reduce(
  //         (acc: any, value: any) => acc + value.price,
  //         0
  //       );
  //       this.showOverlay = false;
  //     },

  //     (error: any) => {
  //       console.log("this is response" + error);
  //     }
  //   );
  // }
}
