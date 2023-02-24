import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machine3Component } from './machine3.component';

describe('Machine3Component', () => {
  let component: Machine3Component;
  let fixture: ComponentFixture<Machine3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Machine3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Machine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
