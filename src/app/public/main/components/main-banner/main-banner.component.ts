import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  textOne: string;
  textTwo: string;
  showTwo = false;

  constructor() {
    this.textOne = 'Hi! My name is <strong class="green-one">Oscar</strong>';
    this.textTwo = `{ I'm a Software Developer };`;
  }

  ngOnInit(): void {
  }

  doSmth(): void {
    this.showTwo = true;
  }

}
