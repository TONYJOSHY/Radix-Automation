import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTileComponent } from './performance-tile.component';

describe('PerformanceTileComponent', () => {
  let component: PerformanceTileComponent;
  let fixture: ComponentFixture<PerformanceTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
