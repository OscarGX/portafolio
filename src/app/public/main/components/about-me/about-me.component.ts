import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { TechnologyItem } from '../../interface';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-public-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  swiperConfig: SwiperOptions;
  technologies: TechnologyItem[] = [];

  constructor() {
    this.swiperConfig = {
      direction: 'horizontal',
      loop: true,
      navigation: true,
      breakpoints: {
        200: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 10,
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    };
    this.getTechnologies();
  }

  public getTechnologies(): void {
    const techs: TechnologyItem[] = [
      {
        iconClass: 'devicon-html5-plain colored cursor-pointer fs-0',
        title: 'HTML5',
      },
      {
        iconClass: 'devicon-css3-plain colored cursor-pointer fs-0',
        title: 'CSS3',
      },
      {
        iconClass: 'devicon-bootstrap-plain colored cursor-pointer fs-0',
        title: 'Bootstrap',
      },
      {
        iconClass: 'devicon-javascript-plain colored cursor-pointer fs-0',
        title: 'JavaScript',
      },
      {
        iconClass: 'devicon-typescript-original colored cursor-pointer fs-0',
        title: 'TypeScript',
      },
      {
        iconClass: 'devicon-angularjs-plain colored cursor-pointer fs-0',
        title: 'Angular',
      },
      {
        iconClass: 'devicon-ionic-original colored cursor-pointer fs-0',
        title: 'Ionic',
      },
      {
        iconClass: 'devicon-vuejs-plain colored cursor-pointer fs-0',
        title: 'VueJS',
      },
      {
        iconClass: 'devicon-jquery-plain-wordmark colored cursor-pointer fs-0',
        title: 'jQuery',
      },
      {
        iconClass: 'devicon-express-original colored cursor-pointer fs-0 text-white',
        title: 'ExpressJS',
      },
      {
        iconClass: 'devicon-nodejs-plain colored cursor-pointer fs-0',
        title: 'NodeJS',
      },
      {
        iconClass: 'devicon-nestjs-plain colored cursor-pointer fs-0',
        title: 'NestJS',
      },
      {
        iconClass: 'devicon-csharp-plain colored cursor-pointer fs-0',
        title: 'C#',
      },
      {
        iconClass: 'devicon-dotnetcore-plain colored cursor-pointer fs-0',
        title: 'Net Core',
      },
      {
        iconClass: 'devicon-dot-net-plain colored cursor-pointer fs-0',
        title: 'Net Framework',
      },
      {
        iconClass: 'devicon-java-plain-wordmark colored cursor-pointer fs-0',
        title: 'Java',
      },
      {
        iconClass: 'devicon-spring-plain colored cursor-pointer fs-0',
        title: 'Spring',
      },
      {
        iconClass: 'devicon-mysql-plain colored cursor-pointer fs-0',
        title: 'MySQL',
      },
      {
        iconClass: 'devicon-microsoftsqlserver-plain-wordmark colored cursor-pointer fs-0 text-white',
        title: 'SQL Server',
      },
      {
        iconClass: 'devicon-mongodb-plain-wordmark colored cursor-pointer fs-0',
        title: 'MongoDB',
      },
      {
        iconClass: 'devicon-git-plain colored cursor-pointer fs-0',
        title: 'Git',
      },
      {
        iconClass: 'devicon-github-original-wordmark colored cursor-pointer fs-0 text-white',
        title: 'GitHub',
      },
      {
        iconClass: 'devicon-firebase-plain-wordmark colored cursor-pointer fs-0',
        title: 'Firebase',
      },
      {
        iconClass: 'devicon-heroku-original-wordmark colored cursor-pointer fs-0',
        title: 'Heroku',
      },
    ];
    this.technologies = techs;
  }
}
