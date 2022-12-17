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
      'title' : 'دسته بندی',
      'link' : '/faq'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی',
      'link' : '/faq'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی',
      'link' : '/faq'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی',
      'link' : '/faq'
    },
    {
      'icon' : '../../assets/hamburger.png',
      'title' : 'دسته بندی',
      'link' : '/faq'
    },
    {
      'icon' : null,
      'title' : 'سوالات متداول',
      'link' : '/faq'
    },
    {
      'icon' : null,
      'title' : 'در دیجی کالا بفروشید',
      'link' : '/faq'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
