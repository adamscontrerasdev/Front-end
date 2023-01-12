import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHardComponent } from './new-hard.component';

describe('NewHardComponent', () => {
  let component: NewHardComponent;
  let fixture: ComponentFixture<NewHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
