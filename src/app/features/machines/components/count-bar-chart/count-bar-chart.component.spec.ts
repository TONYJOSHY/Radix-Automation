import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBarChartComponent } from './count-bar-chart.component';

describe('CountBarChartComponent', () => {
  let component: CountBarChartComponent;
  let fixture: ComponentFixture<CountBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
