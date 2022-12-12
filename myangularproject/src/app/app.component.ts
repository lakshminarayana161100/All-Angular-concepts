import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
updatedcity() {
throw new Error('Method not implemented.');
}
City: any;
updatedCity() {
throw new Error('Method not implemented.');
}
updateCity() {
throw new Error('Method not implemented.');
}
updatecity() {
throw new Error('Method not implemented.');
}
  title = 'myangularproject';

  city: string = "hyderabad";
  town: string = "ongole";            // this is a string interpolation
  cname: string = "special";

  isdisabled: boolean = false;       // isdisabled is variable (property binding)


  isactive: boolean = true;     // iaactive is variable (class binding )

  cvar: string = 'green';        // this is style binding 


  counter: number = 0;
  name = "";
  increment() {
    this.counter += 1;
  }                                    // this the event binding

  decrement() {
    this.counter -= 1;
  }

  changeName(e: any) {                   // e means store the event function AND e is parameter
    console.log(e)
    console.log(e.traget)               // traget is a attribute property
    console.log(e.traget.value)        // particular event (element)

    //this.name = e.traget.value
  }

 capital= "hyderabad" ;

   updatedcapital() {
    this. capital = "bangulore"
  }
  






}
