import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  menuItems = [
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی'
    },
    {
      'icon' : null,
      'title' : 'سوالات متداول'
    },
    {
      'icon' : null,
      'title' : 'در دیجی کالا بفروشید'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
