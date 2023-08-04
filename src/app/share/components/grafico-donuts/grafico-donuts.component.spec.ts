import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDonutsComponent } from './grafico-donuts.component';

describe('GraficoDonutsComponent', () => {
  let component: GraficoDonutsComponent;
  let fixture: ComponentFixture<GraficoDonutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoDonutsComponent],
    });
    fixture = TestBed.createComponent(GraficoDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
