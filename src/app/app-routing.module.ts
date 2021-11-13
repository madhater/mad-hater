import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    data: {
      title: 'Blog',
      isNavigationExpanded: false
    }
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then(m => m.CodeModule),
    data: {
      title: 'Code',
      isNavigationExpanded: false
    }
  },
  {
    path: 'design',
    loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
    data: {
      title: 'Design',
      isNavigationExpanded: false
    }
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule),
    data: {
      title: 'Resume',
      isNavigationExpanded: false
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: null,
      isNavigationExpanded: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
