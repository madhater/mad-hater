import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code.component';

const routes: Routes = [
  {
    path: '',
    component: CodeComponent,
    data: {
      title: 'Code',
      isNavigationExpanded: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
