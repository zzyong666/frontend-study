import { AdComponent } from './../interfaces/ad-component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-two',
  templateUrl: './ad-two.component.html',
  styleUrls: ['./ad-two.component.scss']
})
export class AdTwoComponent implements AdComponent {
  @Input()
  data: any;

}
