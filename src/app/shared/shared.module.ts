import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';
import { ProjectRepoPipe } from './pipes/project-repo.pipe';



@NgModule({
  declarations: [
    UrlSanitizerPipe,
    ProjectRepoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [UrlSanitizerPipe, ProjectRepoPipe],
})
export class SharedModule { }
