import { Component, OnInit } from '@angular/core';
// impoted the { ActiveRoute } component from the Angular library
// to retrive this value in the component class
// this gives the access to the route paramenters
import { ActivatedRoute } from '@angular/router';

// Component based router navigation
// sometime you may need to change the router outlet component
// based on logic accounring in a  component class for istance
import { Router } from '@angular/router';

// imported the component into the home component
import { DataService} from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  quotes: any; // (share data) define the quotes
  // defined a dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id ));
    // check the console to get the response of the route paramenter ID
    // actually we fetch the route paramenter in the component class
    // and set e property and bind the property to this value
    // and do somenthing like for instance you would query an API
    // to get a specific item from the database
   }

  ngOnInit() {
    this._data.quote.subscribe(res => this.quotes = res); // (share data)
  }
// create a custom method
// this corrispond to the path '' on the app-routing.module.ts
sendMeHome() {
  this.router.navigate(['']);
}

}
