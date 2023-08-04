import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosDonutsBarComponent } from './graficos-donuts-bar.component';

describe('GraficosDonutsBarComponent', () => {
  let component: GraficosDonutsBarComponent;
  let fixture: ComponentFixture<GraficosDonutsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficosDonutsBarComponent],
    });
    fixture = TestBed.createComponent(GraficosDonutsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
