import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Obesrvables';

  data: any;


  nobs = new Observable((intimate) => {
    intimate.next("first");
    setTimeout(() => {
      intimate.next('second');
      setTimeout(() => {
        intimate.next('third');
        setTimeout(() => {
          intimate.next('four');
          setTimeout(() => {
            intimate.error('this is test error')
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

  }
  )
  error: any;
  sub2() {
    this.subref=this.nobs.subscribe(
      d => { this.data = d },
      e => { this.error = e },
      () => console.log("complete")

    )
  }

subref:any;

unsub() {
  this.subref.unsubscribe()
}

}
