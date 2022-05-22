import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { ContactComponent } from './components/contact/contact.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    NavbarComponent,
    MainBannerComponent,
    AboutMeComponent,
    ProjectsComponent,
    MainPageComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SwiperModule,
    NgxTypedJsModule,
  ]
})
export class MainModule { }
