import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectMainComponent } from './pages/project-main/project-main.component';
import { ProjectNewComponent } from './pages/project-new/project-new.component';


@NgModule({
  declarations: [
    ProjectMainComponent,
    ProjectNewComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
