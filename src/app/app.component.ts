import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, transformer, stepper } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // <-- add your animations here
    // fader,
    // slider,
    // transformer,
    stepper
  ]

})
export class AppComponent {
  title = 'angular-animation';
  
  prepareRoute(outlet: RouterOutlet) {
    console.log('prepareRoute', outlet);
    if(outlet){
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
  }
}
