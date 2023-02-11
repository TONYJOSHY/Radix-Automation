import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmSecurityComponent } from './alarm-security.component';

describe('AlarmSecurityComponent', () => {
  let component: AlarmSecurityComponent;
  let fixture: ComponentFixture<AlarmSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
