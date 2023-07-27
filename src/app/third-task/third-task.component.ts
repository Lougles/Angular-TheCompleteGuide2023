import { Component } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent {
  status = false;
  btnClickLog = [];
  counter = 0;
  constructor() {
  }
  onhandleClickBtn () {
    this.status = !this.status;
    this.btnClickLog.push(this.counter += 1);
  }

  protected readonly Number = Number;
}
