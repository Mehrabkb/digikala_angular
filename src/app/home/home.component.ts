import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png'
  ]
  ads = [
    '../../assets/ad.jpg',
    '../../assets/ad.jpg'
  ]
  proposalItems = [
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
    '../../assets/headphone.png',
  ]
  moreItems = [
    {
      'icon' : '../../assets/shir.png',
      'text' : 'دیجی کالاجت',
      'link' : '#'
    },
    {
      'icon' : '../../assets/ds.png',
      'text' : 'حراج استایل',
      'link' : '#'
    },
    {
      'icon' : '../../assets/p.png',
      'text' : 'خرید اقساطی',
      'link' : '#'
    },
    {
      'icon' : '../../assets/business.png',
      'text' : 'خرید عمده و سازمانی',
      'link' : '#'
    },
    {
      'icon' : '../../assets/charkh.png',
      'text' : 'چرخ و بخت',
      'link' : '#'
    },
    {
      'icon' : '../../assets/plus.png',
      'text' : 'دیجی پلاس',
      'link' : '#'
    },
    {
      'icon' : '../../assets/tir.png',
      'text' : 'ماموریت ها',
      'link' : '#'
    },
  ];
  freshItems = [
    {
      'image' : '../../assets/crystal.jpg',
      'off' : '40%'
    },
    {
      'image' : '../../assets/latifeh.jpg',
      'off' : '30%'
    },
    {
      'image' : '../../assets/crystal.jpg',
      'off' : '40%'
    },
    {
      'image' : '../../assets/latifeh.jpg',
      'off' : '30%'
    },
    {
      'image' : '../../assets/crystal.jpg',
      'off' : '40%'
    },
    {
      'image' : '../../assets/latifeh.jpg',
      'off' : '30%'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
