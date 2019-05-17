import { Component } from '@angular/core';
import {MustafaService} from "./services/mustafa.service";
import {EditComponent} from "./edit/edit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ="";

  constructor (private MustafaService:MustafaService) {

    this.title = MustafaService.getTitle();
  }


}
