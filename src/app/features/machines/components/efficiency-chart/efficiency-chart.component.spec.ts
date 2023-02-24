import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyChartComponent } from './efficiency-chart.component';

describe('EfficiencyChartComponent', () => {
  let component: EfficiencyChartComponent;
  let fixture: ComponentFixture<EfficiencyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficiencyChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
