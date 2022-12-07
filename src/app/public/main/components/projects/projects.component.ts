import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProjectRead } from 'src/app/private/project/interface';
import { ProjectService } from 'src/app/private/project/services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-public-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: IProjectRead[] = [];
  project!: IProjectRead;
  public apiError = false;
  private subscription = new Subscription();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.subscription.add(this.projectService.getAll().subscribe(data => {
      if (data && data.length > 0) {
        this.projects = data;
        this.project = data[0];
      }
    }, (e) => {
      this.projects = [];
      this.apiError = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  projectCardClick(index: number): void {
    this.project = this.projects[index];
  }

}
