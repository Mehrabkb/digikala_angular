import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation  :ViewEncapsulation.ShadowDom
})
export class BoxComponent implements OnInit {
  slides = [
    {
      'image' : '../../assets/box.png',
      'price' : null,
      'text' : 'پیشنهاد شگفت انگیز',
      'text_link' : 'مشاهده همه'
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
    {
      'image' : '../../assets/payeseshoar.jpg',
      'price' : '359,000',
      'off' : '30%',
    },
  ]
  config: SwiperOptions = {
    slidesPerView: 5,
    direction: 'horizontal',
    pagination: { clickable: true }

  };
  constructor() { }

  ngOnInit(): void {
  }

}
