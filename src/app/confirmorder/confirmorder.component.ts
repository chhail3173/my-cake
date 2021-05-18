import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonConnectionOptions } from 'node:tls';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {
  orderDetail:any = {};

  constructor(private route:ActivatedRoute, private cs: CommonserviceService, private http: HttpClient, private router: Router, private toast: ToastrService) { 
    
    this.orderDetail = this.cs.orderDetail;

    console.log(this.orderDetail); 
  }

  ngOnInit(): void {
  }

  confirmOrder() {
      console.log(this.orderDetail);

    let apiUrl = this.cs.URL + "addcakeorder";
    this.http.post(apiUrl, this.orderDetail).subscribe(
      (response: any) => {
        console.log(response);
        this.toast.success(response.message,"order placed");
        this.router.navigate(["/orders"]);
      },

      (error: any) => {
        console.log("this is response" + error);
      }
    );


  }

}
