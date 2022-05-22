import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'projects'
      },
      {
        path: 'projects',
        loadChildren: () => import('../project/project.module').then(m => m.ProjectModule),
        /* canActivate: [RolGuard],
        data: {
          roles: [RolEnum.ADMIN]
        } */
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
