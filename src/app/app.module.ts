import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// (Share Data) Import the service before to access at it
import { DataService} from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService], // (share data) added data to the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
