import { ToastrModule, ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonserviceService } from "./../commonservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  login: any = {};

  constructor(
    private router: Router,
    public cs: CommonserviceService,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  validateLogin() {
    if (this.cs.validateLoginPage(this.login.email, this.login.password)) {
      let apiUrl = this.cs.URL + "login";
      this.http.post(apiUrl, this.login).subscribe(
        (response: any) => {
          if (response.token) {
            this.toast.success(response.message, "Login Succesful", {
              timeOut: 1000,
            });
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("token", JSON.stringify(response.token));
            this.router.navigate(["/"]);
          } else {
            localStorage.removeItem("user");
          }
        },
        (error) => {
          this.toast.error("Error : " + error.message);
        }
      );
    }
  }
}
