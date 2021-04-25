import { AdService } from './../services/ad.service';
import { AdItem } from './../interfaces/ad-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-index',
  templateUrl: './ad-index.component.html',
  styleUrls: ['./ad-index.component.scss']
})
export class AdIndexComponent implements OnInit {

  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
