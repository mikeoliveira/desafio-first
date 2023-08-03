import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCheckInOutComponent } from './manager-check-in-out.component';

describe('ManagerCheckInOutComponent', () => {
  let component: ManagerCheckInOutComponent;
  let fixture: ComponentFixture<ManagerCheckInOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerCheckInOutComponent],
    });
    fixture = TestBed.createComponent(ManagerCheckInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
