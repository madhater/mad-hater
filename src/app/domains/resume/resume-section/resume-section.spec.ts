import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeSection } from './resume-section';
import { inputBinding, provideZonelessChangeDetection } from '@angular/core';

describe('ResumeSection', () => {
  let component: ResumeSection;
  let fixture: ComponentFixture<ResumeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideZonelessChangeDetection() ],
      imports: [ResumeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSection, {
      bindings: [
        inputBinding('date', () => '2019'),
        inputBinding('title', () => 'A title'),
        inputBinding('location', () => 'Cincinnati, OH')
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
