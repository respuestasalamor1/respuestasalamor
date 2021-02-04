import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse() {
    this.show = !this.show
  }
  redirectHome() {
    location.assign('/home');
  }
}
