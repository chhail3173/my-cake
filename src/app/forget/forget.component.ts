import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonserviceService } from "../commonservice.service";

@Component({
  selector: "app-forget",
  templateUrl: "./forget.component.html",
  styleUrls: ["./forget.component.css"],
})
export class ForgetComponent implements OnInit {
  email: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService,
    private cs: CommonserviceService
  ) {}

  ngOnInit(): void {}

  forgot() {
    if (this.cs.validateForgetEmail(this.email)) {
      let apiUrl = this.cs.URL+"recoverpassword";
      this.http.post(apiUrl, { email: this.email }).subscribe(
        (response: any) => {
          console.log("this is response", response);
          this.toast.success("", "Password sent to your email address", {
            timeOut: 1000,
          });
          this.router.navigate(["/login"]);
        },
        (error) => {
          console.log("this is response" + error);
        }
      );
    } else {
    }
  }
}
