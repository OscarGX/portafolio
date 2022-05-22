import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    AdminMainComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
