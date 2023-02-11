import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallEfficiencyComponent } from './overall-efficiency.component';

describe('OverallEfficiencyComponent', () => {
  let component: OverallEfficiencyComponent;
  let fixture: ComponentFixture<OverallEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
