import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<h4>This is a warning alert!</h4>',
  styles: [
    `
      h4 {
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
