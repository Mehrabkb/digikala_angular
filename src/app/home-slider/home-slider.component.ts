import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  slides = [
    '../../assets/slider1.jpg' ,
    '../../assets/slider2.gif' ,
    '../../assets/slider2.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
