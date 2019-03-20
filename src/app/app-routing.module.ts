import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule',
    data: {
      title: 'Blog',
      isNavigationExpanded: false
    }
  },
  {
    path: 'code',
    loadChildren: './code/code.module#CodeModule',
    data: {
      title: 'Code',
      isNavigationExpanded: false
    }
  },
  {
    path: 'design',
    loadChildren: './design/design.module#DesignModule',
    data: {
      title: 'Design',
      isNavigationExpanded: false
    }
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
