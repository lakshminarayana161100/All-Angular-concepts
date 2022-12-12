import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
pwd: any;


  show(un: any,p: any,grp: any) {
    console.log (un) ;
    console.log (p) ;
    console.log (grp) ;
  }
}
