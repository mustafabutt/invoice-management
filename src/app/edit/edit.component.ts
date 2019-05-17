import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {MustafaService} from "../services/mustafa.service";
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  showEdit:boolean;
  @Input() itemdata:object;

  constructor(private MustafaService:MustafaService,private router: Router) {}

  ngOnInit() {}
  update () {
    this.MustafaService.editData(this.itemdata);
    $("#viewDiv").show();
    $("#editComp").hide();
  }
  goBack() {
    location.reload();
  }

}
