import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swpa';
  config: any;
  fullpage_api: any;
  constructor() {
    this.config = {
          // fullpage options
          licenseKey: 'IlsiwsTP1!',
          sectionsColor: ['#7BAABE', '#4BBFC3', '#7BAABE', '#ccddff', '#7BAABE'],
          anchors: ['home', 'service', 'blog', 'contact', 'lastPage'],
          menu: '#menu',
          scrollOverflow: true,
      
         // scrollHorizontally:true,
          // fullpage callbacks
        // events callback
          afterLoad: (origin, destination, direction) => {
            // console.log(destination);
          },
          afterRender: () => {
            // console.log('afterRender');
          },
          afterResize: (width, height) => {
            // console.log('afterResize' + width + ' ' + height);
          },
          afterSlideLoad: (section, origin, destination, direction) => {
            // console.log(destination);
          }
    };
  }
  getRef(fullPageRef) {
    console.log('iicii');
    this.fullpage_api = fullPageRef;
  }
}
