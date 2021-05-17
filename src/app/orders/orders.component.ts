import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderDetails:any = [];
  cakes:any = [];
  public showOverlay = true;

  constructor(private cs: CommonserviceService, private http: HttpClient) {
    // console.log(this.checkoutDetails);

    let apiUrl = this.cs.URL + "cakeorders";
    this.http.post(apiUrl,{}).subscribe(
      (response: any) => {
        // console.log(response.cakeorders[0]);
        this.orderDetails = response.cakeorders;
        this.orderDetails.forEach((ele:any) => {
          let date = new Date(ele.orderdate);
          ele.orderdate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
          
        });
        console.log(this.orderDetails);
        this.showOverlay = false;
        // console.log(this.orderDetails.cakes[0].name);
        
      },

      (error: any) => {
        console.log("this is response" + error);
      }
    );
   }

  ngOnInit(): void {
    

  }

  orderDetail(i:any) {
    
    this.cakes = this.orderDetails[i].cakes;
    document.querySelector(`#cake${i}`)?.classList.toggle('hidden'); 
//     let card = document.getElementsByClassName("myCard");
// for (let i = 0; i < card.length; i++) {
  
// }
    
  }

}
