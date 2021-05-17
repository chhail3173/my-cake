import { Component, Input, OnInit } from "@angular/core";
import { CommonserviceService } from "./../commonservice.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(private cs: CommonserviceService) {}

  ngOnInit(): void {}
}
