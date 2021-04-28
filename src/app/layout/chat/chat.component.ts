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
  }

  validatorPol() {
    if (this.validatorPolicy) {
      this.validatorPolicy = false;
    } else
      this.validatorPolicy = true;
  }
}
