import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swpa';
  config: any;
  fullpage_api: any;
  constructor() {
    this.config = {
          // fullpage options
          licenseKey: 'YOUR LICENSE KEY HERE',
          anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
          menu: '#menu',
         // scrollHorizontally:true,
          // fullpage callbacks
          afterResize: () => {
            console.log("After resize");
          },
          afterLoad: (origin, destination, direction) => {
            console.log(origin.index);
          }
    };
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
