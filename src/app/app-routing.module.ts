import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Metadata } from './services/metadata.interface';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      heading: 'Mad-Hater',
      isNavigationExpanded: true,
      httpStatus: 200,
      metadata: {
        title: 'Mad-Hater',
        description: 'The personal website of Justin Steele',
      } as Metadata
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./routes/blog/blog.module').then(m => m.BlogModule),
    data: {
      heading: 'Blog',
      isNavigationExpanded: false,
      metadata: {
        title: 'Mad-Hater > Blog',
        description: 'The blog of Justin Steele.',
      } as Metadata
    }
  },
  {
    path: 'code',
    loadChildren: () => import('./routes/code/code.module').then(m => m.CodeModule),
    data: {
      heading: 'Code',
      isNavigationExpanded: false,
      metadata: {
        title: 'Mad-Hater > Code',
        description: 'Code samples of Justin Steele.',
      } as Metadata
    }
  },
  {
    path: 'design',
    loadChildren: () => import('./routes/design/design.module').then(m => m.DesignModule),
    data: {
      title: 'Design',
      heading: 'Design',
      isNavigationExpanded: false,
      metadata: {
        title: 'Mad-Hater > Design',
        description: 'Designs of Justin Steele.',
      } as Metadata
    }
  },
  {
    path: 'resume',
    loadChildren: () => import('./routes/resume/resume.module').then(m => m.ResumeModule),
    data: {
      heading: 'Resume',
      isNavigationExpanded: false,
      metadata: {
        title: 'Mad-Hater > Resume',
        description: 'The resume of Justin Steele.',
      } as Metadata
    }
  },
  { 
    path: 'not-found', 
    loadChildren: () => import('./routes/not-found/not-found.module').then(m => m.NotFoundModule),
    data: {
      heading: 'We’re Sorry. The page you are looking for could not be found.',
      isNavigationExpanded: false,
      httpStatus: 404,
      metadata: {
        title: 'We’re Sorry. The page you are looking for could not be found.',
        description: 'The page you are looking for could not be found.',
      } as Metadata
    }
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
