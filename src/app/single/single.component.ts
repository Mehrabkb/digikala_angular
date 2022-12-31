import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  items : any = [];
  key : number = 1 ;
  htmlItems : any;
  constructor(private testService : TestService) { }

  ngOnInit(): void {
    this.getFilmsByNumber(this.key);
  }
  getFilmsByNumber(key : number){
    this.testService.getFilmsByPageNumber(key).subscribe(index => {
      this.items = index;
      this.addItems();
    })
  }
  btnAddClick(){
    this.key++;
    this.getFilmsByNumber(this.key);
  }
  addItems(){
    for(let i = 0 ; i < this.items.data.length ; i++){
      this.htmlItems += `<div class="item">
      <img src="${this.items.data[i].poster}" alt="">
      <h6>${this.items.data[i].title}</h6>
    </div>`;
    }
    console.log(this.htmlItems);

  }
}
