import { Component } from '@angular/core';

enum List {
  'lifeCycle' = 'lifeCycle',
  'dynamicComponent' = 'dynamicComponent'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  constructor() {
  }

}
