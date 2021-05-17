import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CommonserviceService } from "../commonservice.service";

@Component({
  selector: "app-editform",
  templateUrl: "./editform.component.html",
  styleUrls: ["./editform.component.css"],
})
export class EditformComponent implements OnInit {
  editDetails: any = {};
  cakeid: any;
  file: any;
  ingredients: any = {};
  imgUrl: any;
  showOverlay = true;

  constructor(
    private cs: CommonserviceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    console.log(this.ingredients);
    this.cakeid = this.route.snapshot.params["cakeid"];
    let apiUrl = this.cs.URL + "cake/";
    this.http.get(apiUrl + this.cakeid).subscribe(
      (response: any) => {
        this.editDetails = response.data;
        this.ingredients = { ...this.editDetails.ingredients };
        console.log("editdetails", this.editDetails);
        console.log("ingredients", this.editDetails);
        this.showOverlay = false;
      },
      (error) => {
        console.log("Error" + error);
      }
    );
  }
  ngOnInit(): void {}

  importFile(event: any) {
    event = event.target.parentElement.querySelector("input");
    if (event.files.length == 0) {
      console.log("No file selected!");
      return;
    }

    // get image file and append it to form data
    let file: File = event.files[0];
    var fd = new FormData();
    fd.append("file", file);

    let apiUrl = this.cs.URL + "upload";
    this.http.post(apiUrl, fd).subscribe(
      (response: any) => {
        this.editDetails.image = response.imageUrl;
        console.log("upload image response", response);
      },
      (error) => {
        console.log("this is error response" + error);
      }
    );
  }

  addIng() {
    this.editDetails.ingredients.push("");
  }

  deleteIng(index: any) {
    console.log(index);

    this.editDetails.ingredients.splice(index, 1);
    console.log(this.editDetails.ingredients);
  }
}
