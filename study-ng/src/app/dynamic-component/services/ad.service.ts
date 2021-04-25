import { AdOneComponent } from './../ad-one/ad-one.component';
import { AdItem } from './../interfaces/ad-item';
import { Injectable } from '@angular/core';
import { AdTwoComponent } from '../ad-two/ad-two.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(AdOneComponent, { name: 'ad 1111111', bio: 'askdfkljsdj sjfd1 1 1111 1' }),
      new AdItem(AdTwoComponent, { headline: 'ad 2222222', body: 'askdfkljsdj sjfd2 2 2222 2' }),
    ]
  }
}
