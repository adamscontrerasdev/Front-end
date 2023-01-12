import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufijoComponent } from './menufijo.component';

describe('MenufijoComponent', () => {
  let component: MenufijoComponent;
  let fixture: ComponentFixture<MenufijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenufijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
