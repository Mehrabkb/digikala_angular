import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items = [
    {
      'icon' : '../../assets/express.svg',
      'title' : 'تحویل اکسپرس'
    },
    {
      'icon' : '../../assets/express.svg',
      'title' : 'تحویل اکسپرس'
    },
    {
      'icon' : '../../assets/express.svg',
      'title' : 'تحویل اکسپرس'
    },
    {
      'icon' : '../../assets/express.svg',
      'title' : 'تحویل اکسپرس'
    },
    {
      'icon' : '../../assets/express.svg',
      'title' : 'تحویل اکسپرس'
    },
  ];

  menuItems = [
    {
      'title' : 'با دیجی کالا',
      'subMenu' : [
        'اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر'
      ]
    },
    {
      'title' : 'با دیجی کالا',
      'subMenu' : [
        'اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر'
      ]
    },
    {
      'title' : 'با دیجی کالا',
      'subMenu' : [
        'اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر','اتاق خبر'
      ]
    } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
