import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService implements OnInit {
  cakedetails:any = [];
  min:any;
  max:any;
  URL:any = "https://apibyashu.herokuapp.com/api/";

  sliderArr:any = ["https://wallpapercave.com/wp/wp2126439.jpg","https://c1.wallpaperflare.com/preview/528/445/287/pie-chocolate-brigadier-cake.jpg","https://images2.alphacoders.com/984/984184.jpg"];
  orderDetail:any = {};



  constructor(private http: HttpClient, private toast: ToastrService) { }

  ngOnInit(): void {}

  // showCakes() {
  //   let apiUrl = "https://apibyashu.herokuapp.com/api/allcakes";
  //   this.http.get(apiUrl).subscribe((response:any)=>{
  //   }, (error)=>{
  //     console.log("this is response"+error);
  //     this.toast.error(error, "",{timeOut:2000});
      
  //   })
    
  // }

  validateForgetEmail(email:any) {
    if(!email){
      this.toast.error("","please enter the email",{timeOut:1000});
      return (false)
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return (true)
    } else {
      this.toast.error("","You have entered an invalid email address!",{timeOut:1000});
      return (false)

    }

  }



  validate(email:any,name:any,imageUrl:any) {
    if(!name || !email || !imageUrl){
      this.toast.error("","please fill all field",{timeOut:1000});
      return (false)
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return (true)
    } else {
      this.toast.error("","You have entered an invalid email address!",{timeOut:1000});
      return (false)

    }
  }

  validateLoginPage(email:any,password:any) {
    if(!email || !password){
      this.toast.error("","please fill all field",{timeOut:2000});
      return (false)
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return (true)
    } else {
      this.toast.error("","You have entered an invalid email address!",{timeOut:2000});
      return (false)

    }
  }

  validateSignup(name:any, email:any, password:any) {
    if(!name || !email || !password){
      this.toast.error("","please fill all field",{timeOut:2000});
      return (false)
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return (true)
    } else {
      this.toast.error("","You have entered an invalid email address!",{timeOut:2000});
      return (false)

    }
  }

  filter(min:any, max:any) {
    console.log(min,max);
     
  }


  // cakeData (cakedetails:any) {

  // }

}
