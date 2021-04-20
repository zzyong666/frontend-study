import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentType: string;

  name = 'name1'

  constructor() {
    setTimeout(() => {
      this.name = this.name + 'a'
    }, 2000)
  }

  selectType(type: string) {
    this.currentType = type;
  }
}
