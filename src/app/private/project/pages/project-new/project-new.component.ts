import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagService } from '../../../tag/services/tag.service';
import { TechnologyService } from '../../../technology/services/technology.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';
import { ITagRead } from 'src/app/private/tag/services/interface';
import { ITechnologyRead } from 'src/app/private/technology/interface';
import { StatusEnum } from '../../../../common/enum/status.enum';
import { SourceControlPlatformEnum } from 'src/app/common/enum';
import { IProjectCreate } from '../../interface';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit, OnDestroy {

  public tags: ITagRead[] = [];
  public techs: ITechnologyRead[] = [];
  public status: { text: string; value: number; }[];
  public sourceControlPlatforms: { text: string; value: string; }[];
  public form!: FormGroup;
  private subscription = new Subscription();

  constructor(
    private tagService: TagService,
    private techService: TechnologyService,
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {
    this.createForm();
    this.status = [
      {
        text: 'Active',
        value: StatusEnum.ACTIVE,
      },
      {
        text: 'Inactive',
        value: StatusEnum.INACTIVE,
      }
    ];
    this.sourceControlPlatforms = [
      {
        text: SourceControlPlatformEnum.GITHUB,
        value: SourceControlPlatformEnum.GITHUB,
      },
      {
        text: SourceControlPlatformEnum.GitLab,
        value: SourceControlPlatformEnum.GitLab,
      },
      {
        text: SourceControlPlatformEnum.BitBucket,
        value: SourceControlPlatformEnum.BitBucket,
      },
    ];
  }

  ngOnInit(): void {
    this.getTags();
    this.getTechs();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = this.getRequestObject();
      this.subscription.add(this.projectService.createOne(body).subscribe(data => {
        console.log(data);
        alert('Success prro');
      }, (e) => {
        console.log(e);
        alert('Error prro');
      }));
    }
  }

  private getTags(): void {
    this.subscription.add(this.tagService.getAll().subscribe(data => {
      this.tags = data;
    }));
  }

  private getTechs(): void {
    this.subscription.add(this.techService.getAll().subscribe(data => {
      this.techs = data;
    }));
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      thumbnail: ['', [
        Validators.required,
      ]],
      videoUrl: ['', [
        Validators.required,
      ]],
      status: ['', [
        Validators.required,
      ]],
      year: [null, [
        Validators.required,
      ]],
      clientName: ['', [
        Validators.required,
      ]],
      tags: [null, [
        Validators.required,
      ]],
      technologies: [null, [
        Validators.required,
      ]],
      repos: this.fb.array([]),
    });
    const repoItem = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
      platform: ['', [
        Validators.required
      ]],
      url: ['', [
        Validators.required
      ]],
      public: [false, [
        Validators.required
      ]],
    });
    this.repos.push(repoItem);
  }

  public get repos(): FormArray {
    return this.form.get('repos') as FormArray;
  }

  addSkuItem(): void {
    const repoItem = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
      platform: ['', [
        Validators.required
      ]],
      url: ['', [
        Validators.required
      ]],
      public: [false, [
        Validators.required
      ]],
    });
    this.repos.push(repoItem);
  }

  deleteSkuItem(index: number): void {
    this.repos.removeAt(index);
  }

  private getRequestObject(): IProjectCreate {
    const project: IProjectCreate = {
      name: this.form.value.name,
      description: this.form.value.description,
      thumbnail: this.form.value.thumbnail,
      videoUrl: this.form.value.videoUrl,
      status: parseInt(this.form.value.status),
      year: this.form.value.year,
      clientName: this.form.value.clientName,
      tags: [],
      technologies: [],
      repos: this.repos.value,
    };
    const tags = this.form.value.tags as number[];
    const technologies = this.form.value.technologies as number[];
    tags.forEach(tag => {
      project.tags.push({
        id: tag,
      });
    });
    technologies.forEach(tech => {
      project.technologies.push({
        id: tech,
      });
    });
    return project;
  }

}
