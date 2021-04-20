import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges,
  DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit {

  title = '生命周期钩子的例子';
  logIndex: number = 1;  //计数器

  logList: string[] = [];

  _name: string;
  @Input()
  get name(): string {
    this.logIt("input prop get");
    return this._name
  }
  set name(v: string) {
    this._name = v;
    this.logIt("input prop set");
  }

  constructor() {
    this.logList = [];
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
