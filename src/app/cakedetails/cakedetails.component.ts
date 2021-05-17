import { ToastrService } from 'ngx-toastr';
import { CommonserviceService } from './../commonservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css'],
})
export class CakedetailsComponent implements OnInit {
  cakedetails: any = this.cs.cakedetails;
  cakeid: any;
  file: any;
  user: any = {};

  constructor(
    private cs: CommonserviceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService
  ) {
    this.cakeid = this.route.snapshot.params['cakeid'];
    let apiUrl = this.cs.URL+"cake/";
    this.http.get(apiUrl + this.cakeid).subscribe(
      (response: any) => {
        console.log('this is response', response);
        this.cakedetails = response.data;
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
  }

  ngOnInit(): void {}

  cartItem() {
   
    if (!localStorage.getItem('user')) {
      this.toast.error('Please login');
      this.router.navigate(['/login']);
    } else {
      
    
    // cart cake object
    const cartCake = {
      cakeid: this.cakedetails.cakeid,
      name: this.cakedetails.name,
      image: this.cakedetails.image,
      weight: this.cakedetails.weight,
      price: this.cakedetails.price,
    };

    // api url
    let apiUrl = this.cs.URL+"addcaketocart";
    this.http.post(apiUrl, cartCake).subscribe(
      (response: any) => {
        this.toast.success(`${this.cakedetails.name} is Succesfully Cart`);
        console.log('add cake to cart', response);
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
    }
  }

  
}
