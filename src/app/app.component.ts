import { Component } from '@angular/core';
import { Router, NavigationEnd,NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BackApp';
  loading:boolean = true;

  constructor( private _router: Router) {
    this._router.events.subscribe((routerEvent:Event)=>{
        
      if(routerEvent instanceof NavigationStart){
        this.loading = true;
      }
      if(routerEvent instanceof NavigationEnd){
        setTimeout(() => { // here
          this.loading = false;
        }, 400);
      }
    });
  }
}
