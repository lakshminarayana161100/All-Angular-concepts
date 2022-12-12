import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdownsInAngular';


  states = [
    {
      id : 1,
      name: "Andhra Pradesh",
      code: "Ap"
    },
    {
      id : 3,
      name: "Maharashtra",
      code: "M"
    },
    {
    id : 2,
    name: "tamil Nadu",
    code: "TN"
   },
   {
    id : 4,
    name: "Karnataka",
    code: "KT"
   },
  ]

  districts = [
    {
      id : 5,
    name: "krishna",
    s_id:1
    },
    {
      id : 6,
    name: "prakasam",
    s_id:1
    },
    {
      id : 7,
    name: "guntur",
    s_id:1
    },
    {
      id : 8,
    name: "vijayawada",
    s_id:1
    },
    {
      id : 9,
    name: "salem",
    s_id:2
    },
    {
      id : 10,
    name: "kanchipuram",
    s_id:2
    },
    {
      id : 11,
    name: "erode",
    s_id:2
    },
    {
      id : 12,
    name: "madurai",
    s_id:2
    },
    {
      id : 13,
    name: "nashik",
    s_id:3
    },
    {
      id : 14,
    name: "amravati",
    s_id:3
    },
    {
      id :15,
    name: "thane",
    s_id:3
    },
    {
      id : 16,
    name: "jalgona",
    s_id:3
    },
    {
      id : 17,
    name: "belagavi",
    s_id:4
    },{
      id : 18,
    name: "bidar",
    s_id:4
    },{
      id : 19,
    name: "ballari",
    s_id:4
    },{
      id : 20,
    name: "hassan",
    s_id:4
    }
  ]

  fliterDistricts = this.districts;




  updateDistricts(e:any)  {
    let sId = e.target.value ;
    this.fliterDistricts = this.districts.filter (
      (d) => d['s_id'] ==sId
    )
  }
}
