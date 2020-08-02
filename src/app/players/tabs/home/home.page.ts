import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  appLogo = '../../assets/icon/logo-sm.png';
  constructor() { }

  ngOnInit() {
  }

}
