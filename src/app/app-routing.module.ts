import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import the 2 new components using the router for the navigation
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { // set up our path of the new components
    path: '',   // home path with nothing inside
    component: HomeComponent
  },
  {
    path: 'about', // set in fetch a route paramenter 'about/:id'
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
