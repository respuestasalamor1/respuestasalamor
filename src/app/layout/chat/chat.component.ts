import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  validatorPolicy = false;
  constructor() { }

  ngOnInit(): void {
    this.validatorPolicy = false;
    const valPolicy = sessionStorage.getItem('validatorPolicy');
    this.validatorPolicy = valPolicy == 'true' ? true : false;
  }

  validatorPol() {
    if (this.validatorPolicy) {
      this.validatorPolicy = false;
      sessionStorage.setItem('validatorPolicy', 'false');
    } else
      this.validatorPolicy = true;
    sessionStorage.setItem('validatorPolicy', 'true');
  }
}
