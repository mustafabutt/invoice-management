import { Component, OnInit,Injectable } from '@angular/core';
import {MustafaService} from "../services/mustafa.service";
import {Router} from '@angular/router';
import {User} from '../models/userModel'
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponentComponent implements OnInit {
  user:User
  parent:string= "parent data"

  constructor(private MustafaService:MustafaService, private router: Router) {
    this.user =  {invoicId:0,s_charges:0,p_charges:0,date:""};

  }

  ngOnInit() {

  }
  addValues() {

     this.MustafaService.addData(this.user);
     this.router.navigate([''])
  }
  methodme($event){
    debugger
  }

}
