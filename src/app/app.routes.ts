import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { blogListResolver } from './domains/blog/blog-list/blog-list-resolver';
import { blogArticleResolver } from './domains/blog/blog-article/blog-article-resolver';

interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    url: string;
    title: string;
    type: string;
    description: string;
    image: string;
  }
}

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
    pathMatch: 'full',
    loadComponent: () => import('./domains/blog/blog-list/blog-list').then(m => m.BlogList),
    resolve: {
      blogList: blogListResolver
    },
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
    path: 'blog/:blogFileName',
    pathMatch: 'full',
    loadComponent: () => import('./domains/blog/blog-article/blog-article').then(m => m.BlogArticle),
    resolve: {
      blogArticle: blogArticleResolver
    },
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
    loadComponent: () => import('./domains/code/code').then(m => m.Code),
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
    loadComponent: () => import('./domains/design/design').then(m => m.Design),
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
    loadComponent: () => import('./domains/resume/resume').then(m => m.Resume),
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
    loadComponent: () => import('./domains/not-found/not-found').then(m => m.NotFound),
    data: {
      heading: 'We’re Sorry. The page you are looking for could not be found.',
      isNavigationExpanded: false,
      metadata: {
        title: 'We’re Sorry. The page you are looking for could not be found.',
        description: 'The page you are looking for could not be found.',
      } as Metadata
    }
  },
  { path: '**', redirectTo: '/not-found' }
];
