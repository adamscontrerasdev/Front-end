import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdubyidComponent } from './edubyid.component';

describe('EdubyidComponent', () => {
  let component: EdubyidComponent;
  let fixture: ComponentFixture<EdubyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdubyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdubyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
