import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golf-ui';

  header1 = 'Golf Stats';
  header2 = 'Course List';

  actionResult: string;

  action1 = 'Add';
  action2 = 'Remove';

  actionClicked1(event) {
    this.actionResult = this.action1 + ' clicked';
  }

  actionClicked2(event) {
    this.actionResult = this.action2 + ' clicked';
  }

}
