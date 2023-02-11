import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelecboxComponent } from './multi-selecbox.component';

describe('MultiSelecboxComponent', () => {
  let component: MultiSelecboxComponent;
  let fixture: ComponentFixture<MultiSelecboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelecboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelecboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
