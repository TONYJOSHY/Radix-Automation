import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdStorageComponent } from './cold-storage.component';

describe('ColdStorageComponent', () => {
  let component: ColdStorageComponent;
  let fixture: ComponentFixture<ColdStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
