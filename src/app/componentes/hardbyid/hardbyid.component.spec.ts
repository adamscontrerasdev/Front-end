import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardbyidComponent } from './hardbyid.component';

describe('HardbyidComponent', () => {
  let component: HardbyidComponent;
  let fixture: ComponentFixture<HardbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
