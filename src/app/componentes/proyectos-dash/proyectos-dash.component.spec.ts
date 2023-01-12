import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDashComponent } from './proyectos-dash.component';

describe('ProyectosDashComponent', () => {
  let component: ProyectosDashComponent;
  let fixture: ComponentFixture<ProyectosDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
