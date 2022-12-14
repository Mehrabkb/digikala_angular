import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reads',
  templateUrl: './reads.component.html',
  styleUrls: ['./reads.component.css']
})
export class ReadsComponent implements OnInit {

  items = [
    {
      'img' : '../../assets/iphone.jpg',
      'title' : 'ایفون را با بهترین قیمت بخرید'
    },
    {
      'img' : '../../assets/iphone.jpg',
      'title' : 'ایفون را با بهترین قیمت بخرید'
    },
    {
      'img' : '../../assets/iphone.jpg',
      'title' : 'ایفون را با بهترین قیمت بخرید'
    },
    {
      'img' : '../../assets/iphone.jpg',
      'title' : 'ایفون را با بهترین قیمت بخرید'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
