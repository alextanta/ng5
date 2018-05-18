import { Component, OnInit } from '@angular/core';
// imported the Angular Animation
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
// imported the component into the home component
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('quotes', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]), { optional: true }),
          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({ opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({ opacity: 0, transform: 'translateY(-75%)', offset: 1})
            ]))]), { optional: true })

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: String = 'Add New Quote';
  quoteText: String = '';
  quotes = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.quote.subscribe(res => this.quotes = res);
    this.itemCount = this.quotes.length;
    this._data.changeQuote(this.quotes);
  }

  addItem() {
    this.quotes.push(this.quoteText);
    this.quoteText = '';
    this.itemCount = this.quotes.length;
    this._data.changeQuote(this.quotes);
  }
  removeItem(i) {
    this.quotes.splice(i, 1);
    this._data.changeQuote(this.quotes);
  }

}
