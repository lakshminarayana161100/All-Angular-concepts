import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starrating1';

  stars=[1,2,3,4,5];

   rating=0;

   updateRating(r:any) {
    this.rating = r
   }
}
