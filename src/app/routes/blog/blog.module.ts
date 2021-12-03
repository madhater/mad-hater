import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { BlogResolver } from './blog.resolver';
import { BlogArticleResolver } from './blog-article.resolver';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [
    BlogResolver,
    BlogArticleResolver
  ]
})
export class BlogModule { }
