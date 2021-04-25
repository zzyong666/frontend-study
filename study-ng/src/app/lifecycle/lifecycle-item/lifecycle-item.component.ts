import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-item',
  templateUrl: './lifecycle-item.component.html',
  styleUrls: ['./lifecycle-item.component.scss']
})
export class LifecycleItemComponent implements OnInit, OnChanges,
  DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit {

  title = '生命周期钩子的例子';
  logIndex: number = 1;  //计数器

  logList: string[] = [];

  _name: string;
  @Input()
  get name(): string {
    this.logIt(`input prop get ${this._name}`);
    return this._name
  }
  set name(v: string) {
    this._name = v;
    this.logIt(`input prop set ${v}`);
  }

  constructor() {
    this.logIt("constructor");
  }

  logIt(msg: string) {
    const str = `#${this.logIndex++}  ${msg}`;
    console.log(str);
    this.logList.push(str);
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logIt("ngOnChanges");
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }


}
