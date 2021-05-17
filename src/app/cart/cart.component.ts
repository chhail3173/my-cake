import { CommonserviceService } from "./../commonservice.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItem: any = [];
  public showOverlay = true;
  constructor(
    private cs: CommonserviceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.cartItems();
  }

  ngOnInit(): void {}
  // cart items from cakecart api
  cartItems() {
    let apiUrl = this.cs.URL+"cakecart";
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
        this.cartItem = response.data;
        this.showOverlay = false;
      },
      (error) => {
        console.log("this is response" + error);
      }
    );
  }

  //  remove cake from cart
  removeCake(i: any) {
    this.showOverlay = true;
    let apiUrl = this.cs.URL+"removecakefromcart";
    this.http.post(apiUrl, { cakeid: this.cartItem[i].cakeid }).subscribe(
      (response: any) => {
        this.cartItems();
        this.showOverlay = false;
      },
      (error) => {
        console.log("this is response" + error);
      }
    );
  }
  //  navigate cart component

  detail() {
      this.router.navigate(["/checkout"]);
  }
}
