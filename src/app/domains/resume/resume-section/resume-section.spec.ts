import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSection } from './resume-section';

describe('ResumeSection', () => {
  let component: ResumeSection;
  let fixture: ComponentFixture<ResumeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
