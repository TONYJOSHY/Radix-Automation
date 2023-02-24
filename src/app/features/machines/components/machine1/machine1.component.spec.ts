import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machine1Component } from './machine1.component';

describe('Machine1Component', () => {
  let component: Machine1Component;
  let fixture: ComponentFixture<Machine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Machine1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Machine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
