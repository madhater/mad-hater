import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticle } from './blog-article';
import { provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BlogArticle', () => {
  let component: BlogArticle;
  let fixture: ComponentFixture<BlogArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ blogArticle: '<p>some html</p>' })
          }
        }
      ],
      imports: [BlogArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
