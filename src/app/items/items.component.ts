import { LoadingintercepterService } from "./../loadingintercepter.service";
import { Component, OnInit, Input } from "@angular/core";
import { CommonserviceService } from "./../commonservice.service";
import { from } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  card: any;
  i: any;
  public showOverlay = true;
  
  // current_page = 1;
  // records_per_page = 2;
  // cakes:any = [];

  constructor(
    public cs: CommonserviceService,
    private router: Router,
    private http: HttpClient,
    private loading: LoadingintercepterService
  ) {
    // this.changePage(1);
  }
  ngOnInit(): void {
    // let apiUrl = this.cs.URL+'allcakes';
    let apiUrl = 'https://apifromashu.herokuapp.com/api/allcakes';
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response.data[0], "this is response");
        this.card = response.data;
        // this.cakes = response.data;
        this.showOverlay = false;
      },
      (error) => {
        console.log("this is response" + error);
      }
    );
  }

  sendID(i: any) {
    console.log(this.card);
    this.router.navigate(["/cakedetails", this.card[i].cakeid]);
  }

  sortLowToHigh() {
    this.card.sort((a: any, b: any) => +a.price - +b.price);
  }
  sortHighToLow() {
    this.card.sort((a: any, b: any) => +b.price - +a.price);
  }


}
