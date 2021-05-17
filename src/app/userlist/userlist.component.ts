import { Component, OnInit } from "@angular/core";
import { CommonserviceService } from "./../commonservice.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"],
})
export class UserlistComponent implements OnInit {
  constructor(private data: CommonserviceService) {}

  ngOnInit(): void {}
}
