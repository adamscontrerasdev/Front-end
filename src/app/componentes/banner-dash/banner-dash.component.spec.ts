import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDashComponent } from './banner-dash.component';

describe('BannerDashComponent', () => {
  let component: BannerDashComponent;
  let fixture: ComponentFixture<BannerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
