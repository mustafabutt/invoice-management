import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from "@angular/common/http";
import {resolveProjectModule} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/require-project-module";
import {debug} from "util";

@Injectable({
  providedIn: 'root'
})
export class MustafaService {

  constructor(private http:HttpClient) { }

  getData () {
      return localStorage.getItem('invoiceData');
  }
  getTitle() {
    return "dynamic title"
  }

  addData(obj) {
    try{
      let arr = JSON.parse(localStorage.getItem("invoiceData"));
      if(arr == null || arr == undefined)
        arr = [];
      arr.push(obj)
      localStorage.setItem("invoiceData",JSON.stringify(arr));
    }catch(err){
      throw err
    }


  }
  editData(obj) {
    try{
      let list = JSON.parse(localStorage.getItem("invoiceData"));
      list.forEach(function (item,i) {
        if(item.invoicId == obj.invoicId){
          list.splice(i,1);
          list.push(obj);
          localStorage.setItem("invoiceData",JSON.stringify(list));
        }
      })
    }catch(err){
      throw err
    }


  }
  removeItem(obj){
    try{
      let list = JSON.parse(localStorage.getItem("invoiceData"));
      list.forEach(function (item,i) {
        if(item.invoicId == obj.invoicId){
          list.splice(i,1);
          localStorage.setItem("invoiceData",JSON.stringify(list));
        }
      })

    }catch(err){
      throw err
    }

  }

}
