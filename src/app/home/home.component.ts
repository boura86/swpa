import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() { 
    this.config = {
      // fullpage options
      licenseKey: 'IlsiwsTP1!',
      sectionsColor: ['#7BAABE', '#4BBFC3', '#7BAABE', '#ccddff', '#7BAABE'],
      anchors: ['service', 'blog', 'contact'],
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

  ngOnInit() {}

  getRef(fullPageRef) {
    console.log('iicii');
    this.fullpage_api = fullPageRef;
  }

}
