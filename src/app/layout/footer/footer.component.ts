import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectHome() {
    location.assign('/home');
  }
  redirectServicio() {
    location.assign('/servicios');
  }
  redirectBlog() {
    location.assign('/blog');
  }
  redirectContactenos() {
    location.assign('/contactenos');
  }
  redirectAcercaDe() {
    location.assign('/acercade');
  }

}
