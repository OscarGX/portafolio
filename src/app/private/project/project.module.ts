import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMainComponent } from './pages/project-main/project-main.component';
import { ProjectNewComponent } from './pages/project-new/project-new.component';
import { VideoTestComponent } from './pages/video-test/video-test.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ReactiveFormsModule  } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [
    ProjectMainComponent,
    ProjectNewComponent,
    VideoTestComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    NgxTypedJsModule,
  ]
})
export class ProjectModule { }
