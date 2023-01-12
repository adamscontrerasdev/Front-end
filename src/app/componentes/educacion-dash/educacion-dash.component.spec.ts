import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDashComponent } from './educacion-dash.component';

describe('EducacionDashComponent', () => {
  let component: EducacionDashComponent;
  let fixture: ComponentFixture<EducacionDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
