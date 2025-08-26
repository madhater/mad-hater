import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PageStateService } from './core/page-state-service/page-state-service';
import { IMetadata } from './core/page-state-service/metadata-interface';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Home } from './core/home/home';

describe('App', () => {
  let routingHarness;

  beforeEach(async () => {    
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([
          {
            path: '',
            pathMatch: 'full',
            component: Home,
          }
        ]),
        {
          provide: PageStateService,
          useValue: {
            heading$$: signal<string>('Hello, mad-hater'),
            metadata$$: signal<IMetadata>({ title: '', description: '' }),
            isNavigationExpanded$$: signal<boolean>(false)
          }
        },
         
      ]
    }).compileComponents();
    routingHarness = await RouterTestingHarness.create();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, mad-hater');
  });
});
