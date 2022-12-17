import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  encapsulation  :ViewEncapsulation.ShadowDom
})
export class HomeSliderComponent implements OnInit {
  slides = [
    '../../assets/slider1.jpg' ,
    '../../assets/slider2.gif' ,
    '../../assets/slider2.jpg'
  ]
  config: SwiperOptions = {
    slidesPerView: 1,
    direction: 'horizontal',
    pagination: { clickable: true }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
