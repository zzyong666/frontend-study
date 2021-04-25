import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-index',
  templateUrl: './lifecycle-index.component.html',
  styleUrls: ['./lifecycle-index.component.scss']
})
export class LifecycleIndexComponent {

  name = 'name1'

  constructor() {
    setTimeout(() => {
      this.name = this.name + 'a'
    }, 2000)
  }

}
