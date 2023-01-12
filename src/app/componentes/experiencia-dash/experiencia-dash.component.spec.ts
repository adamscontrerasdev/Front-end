import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDashComponent } from './experiencia-dash.component';

describe('ExperienciaDashComponent', () => {
  let component: ExperienciaDashComponent;
  let fixture: ComponentFixture<ExperienciaDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
