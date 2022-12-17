import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-faq',
	standalone: true,
	imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  encapsulation : ViewEncapsulation.None

})
export class FaqComponent implements OnInit {
	disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
