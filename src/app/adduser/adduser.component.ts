import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { CommonserviceService } from "./../commonservice.service";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"],
})
export class AdduserComponent implements OnInit {


  constructor(private data: CommonserviceService) {}

  ngOnInit(): void {}

}
