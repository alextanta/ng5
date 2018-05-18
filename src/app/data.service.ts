import { Injectable } from '@angular/core';
// Share data between component using the "rxjs Behavior Subject" library
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  // (share data) declare in our class create a private property
  private quotes = new BehaviorSubject<any>(['Success consists of going from failure to failure without loss of enthusiasm']); // property

  quote = this.quotes.asObservable(); // property

  constructor() { }

  // (share data) create a custom method accesible from ather components
  changeQuote(quote) {
    this.quotes.next(quote);
  }

}
