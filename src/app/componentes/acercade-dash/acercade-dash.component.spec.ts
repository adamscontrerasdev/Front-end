import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeDashComponent } from './acercade-dash.component';

describe('AcercadeDashComponent', () => {
  let component: AcercadeDashComponent;
  let fixture: ComponentFixture<AcercadeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
