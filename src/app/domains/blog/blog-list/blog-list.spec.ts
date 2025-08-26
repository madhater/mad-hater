import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogList } from './blog-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IBlog } from '../blog-interface';
const blogList: IBlog[] = [
  {
    "title": "Tyranny of Now",
    "description": "A tale of impossible expectations and insurmountable tech debt.",
    "file": "tyranny-of-now.html",
    "author": "Justin Steele",
    "date": new Date("2019/03/01")
  },
  {
    "title": "API Design is UI Design",
    "description": "SOA is not an excuse to skip the design process.",
    "file": "api-design-is-ui-design.html",
    "author": "Justin Steele",
    "date": new Date("2019/03/01")
  },
  {
    "title": "When did it all get so complicated?",
    "description": "Thoughts on CDNs, browsers & service workers",
    "file": "when-did-caching-get-so-complicated.html",
    "author": "Justin Steele",
    "date": new Date("2019/03/01")
  }
]

describe('BlogList', () => {
  let component: BlogList;
  let fixture: ComponentFixture<BlogList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ blogList })
          }
        }
      ],
      imports: [BlogList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
