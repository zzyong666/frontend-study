import { AdComponent } from './../interfaces/ad-component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-one',
  templateUrl: './ad-one.component.html',
  styleUrls: ['./ad-one.component.scss']
})
export class AdOneComponent implements AdComponent {

  @Input()
  data: any;
  
}
