import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  show: boolean = false;

  clickType = 0;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(e: MouseEvent) {
    this.clickType = this.clickType === 2 ? 0 : (this.clickType + 1)
  }
}
