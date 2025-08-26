import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design } from './design';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Design', () => {
  let component: Design;
  let fixture: ComponentFixture<Design>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [Design]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
