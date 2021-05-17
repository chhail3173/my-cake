import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  cartItem: any = [];
  public showOverlay = true;

  constructor(private cs: CommonserviceService,private http: HttpClient) {
    this.cartItems();
   }

  ngOnInit(): void {
  }
  cartItems() {
    let apiUrl = this.cs.URL+"cakecart";
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
        this.cartItem = response.data;
        this.showOverlay = false;
        console.log('a');
        console.log(this.cartItem);
        
      },
      (error) => {
        console.log("this is response" + error);
      }
    );
  }

  confirm() {
    
  }

}
