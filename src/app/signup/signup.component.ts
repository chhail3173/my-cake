import { ToastrService } from 'ngx-toastr';
import { CommonserviceService } from './../commonservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {}



  constructor(private http: HttpClient, public cs: CommonserviceService, private toast : ToastrService) { }

  ngOnInit(): void {
  }

  register () {
    if(this.cs.validateSignup(this.user.name, this.user.email, this.user.password)) {
      let apiUrl = this.cs.URL+"register";
      this.http.post(apiUrl,this.user).subscribe((response:any)=>{
        if(response.message === "User Already Exists"){
        this.toast.error(response.message, "",{timeOut:2000});
        }else {
        this.toast.success(response.message, "",{timeOut:2000});
        }
        console.log(response.message);
        

        
    
      }, (error)=>{
        this.toast.error(error,"",{timeOut:2000});
      })

    }
   
  }

}
