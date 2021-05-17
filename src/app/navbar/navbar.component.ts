import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonserviceService } from "./../commonservice.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  searchkey: any = undefined;
  num: any = true;

  search() {
    if (this.searchkey)
      this.router.navigate(["/navsearch"], {
        queryParams: { q: this.searchkey },
      });
  }

  constructor(
    private cs: CommonserviceService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem("user");
  }
  ngDoCheck() {
    if (localStorage.user) this.num = false;
    if (!localStorage.user) this.num = true;
  }

  admin() {
    this.router.navigate(["/admin"]);
  }
}
