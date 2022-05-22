import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMainComponent } from './pages/project-main/project-main.component';
import { ProjectNewComponent } from './pages/project-new/project-new.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectMainComponent,
  },
  {
    path: 'new',
    component: ProjectNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
