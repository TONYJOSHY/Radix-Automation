import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityTileComponent } from './quantity-tile.component';

describe('QuantityTileComponent', () => {
  let component: QuantityTileComponent;
  let fixture: ComponentFixture<QuantityTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
