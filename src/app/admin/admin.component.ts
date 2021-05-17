import { LoadingintercepterService } from "./../loadingintercepter.service";
import { HttpClient } from "@angular/common/http";
import { CommonserviceService } from "./../commonservice.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  card: any;
  i: any;
  admin: any = {};
  public showOverlay = true;

  constructor(
    public cs: CommonserviceService,
    private router: Router,
    private http: HttpClient,
    private loading: LoadingintercepterService
  ) {}

  ngOnInit(): void {
    let apiUrl = this.cs.URL+"allcakes";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response.data[0], "this is responsed");
        this.card = response.data;
        this.showOverlay = false;
      },
      (error) => {
        console.log("this is response" + error);
      }
    );
  }

  adminID(i: any) {
    this.router.navigate(["/admin/editForm", this.card[i].cakeid]);
  }
}
