import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTileComponent } from './time-tile.component';

describe('TimeTileComponent', () => {
  let component: TimeTileComponent;
  let fixture: ComponentFixture<TimeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
