import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appapplication';
Items:any
text:any
UPC:any


  getproduct(){

    console.log(this.UPC)
    let requestOptions = {
      method:'GET',
      
    };
    fetch("http://localhost:7000/itemRoutes/itemsByUPC/"+this.UPC, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result),
    this.Items = result.item
    }
    
     ).catch(err=> 
      console.log(err))
    
     
  }
  
}
