import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogResolver } from './blog.resolver';
import { BlogArticleResolver } from './blog-article.resolver';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: {
      title: 'Blog',
      isNavigationExpanded: false
    },
    resolve: {
      blogList: BlogResolver
    }
  },
  {
    path: ':blogFileName',
    component: BlogComponent,
    data: {
      title: 'Blog',
      isNavigationExpanded: false
    },
    resolve: {
      blogList: BlogResolver,
      blogArticle: BlogArticleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
