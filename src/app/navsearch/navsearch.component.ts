import { CommonserviceService } from './../commonservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navsearch',
  templateUrl: './navsearch.component.html',
  styleUrls: ['./navsearch.component.css'],
})
export class NavsearchComponent implements OnInit {

  searchkey: any;
  min: any;
  max: any;
  i:any;
  msg:any;

  constructor(private cs: CommonserviceService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.queryParams.subscribe((queryparams: any) => {
    
      let apiUrl = this.cs.URL+"searchcakes?q=";
      this.http.get(apiUrl+queryparams.q).subscribe((response:any)=>{
        console.log("this is response"+response);
        this.searchkey = response.data
         if(this.searchkey.length === 0){
          this.msg = "data not found"
         }
        console.log(this.searchkey);
    
      }, (error)=>{
        console.log("this is response"+error);
      })
  
      console.log('results', this.searchkey);
    });
  }

  ngOnInit(): void {}

  filter() {
    if (!this.min && !this.max) return;

    this.searchkey = this.searchkey.filter((e: any) =>
      (this.min
        ? e.price >= this.min
        : true) && (this.max
        ? e.price <= this.max
        : true)
    );

    console.log(this.min);
  }

  send(i:any) {
    this.router.navigate(['/cakedetails', this.searchkey[i].cakeid]);
  }

}
