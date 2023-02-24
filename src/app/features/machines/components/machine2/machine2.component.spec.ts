import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machine2Component } from './machine2.component';

describe('Machine2Component', () => {
  let component: Machine2Component;
  let fixture: ComponentFixture<Machine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Machine2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Machine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
