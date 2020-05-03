import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // use 'template' instead of 'templateUrl'
  // and directly write html code inside
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
