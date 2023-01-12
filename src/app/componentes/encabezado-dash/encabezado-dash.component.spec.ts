import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoDashComponent } from './encabezado-dash.component';

describe('EncabezadoDashComponent', () => {
  let component: EncabezadoDashComponent;
  let fixture: ComponentFixture<EncabezadoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
