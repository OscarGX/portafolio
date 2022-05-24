import { Pipe, PipeTransform } from '@angular/core';
import { SourceControlPlatformEnum } from 'src/app/common/enum';

@Pipe({
  name: 'projectRepo'
})
export class ProjectRepoPipe implements PipeTransform {

  transform(platform: string): string {
    switch (platform) {
      case SourceControlPlatformEnum.GITHUB:
        return 'fab fa-github';
      case SourceControlPlatformEnum.GitLab:
        return 'fab fa-gitlab';
      case SourceControlPlatformEnum.BitBucket:
        return 'fab fa-bitbucket';
      default:
        return 'fab fa-github';
    }
  }

}
