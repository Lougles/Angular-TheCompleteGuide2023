import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server Name';
  username = '';
  flag = true;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUpdateFlag () {
    if (this.username.length >= 1) {
      this.flag = false;
    }
  }
  onResetUserName () {
    this.username = '';
    this.flag = true;
  }
}
