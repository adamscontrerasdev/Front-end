import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDashComponent } from './skills-dash.component';

describe('SkillsDashComponent', () => {
  let component: SkillsDashComponent;
  let fixture: ComponentFixture<SkillsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
