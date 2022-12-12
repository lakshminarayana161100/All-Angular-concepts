import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
form!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }


  show(un: any,p: any,ngModelGroup:any) {
    console.log(un);
    console.log(p)
    console.log(ngModelGroup)
  }


  submit(form: any) {
    console.log(form)
  }
}
