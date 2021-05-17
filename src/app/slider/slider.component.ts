import { CommonserviceService } from './../commonservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderArr:any = this.cs.sliderArr

  constructor(private cs: CommonserviceService) { }

  ngOnInit(): void {
  }

}
