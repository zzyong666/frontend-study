import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleItemComponent } from './lifecycle-item.component';

describe('LifecycleItemComponent', () => {
  let component: LifecycleItemComponent;
  let fixture: ComponentFixture<LifecycleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
