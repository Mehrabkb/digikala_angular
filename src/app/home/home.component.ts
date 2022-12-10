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
  constructor() { }

  ngOnInit(): void {
  }

}
