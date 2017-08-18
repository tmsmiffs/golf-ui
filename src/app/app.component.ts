import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golf-ui';

  headers = 'Headers';
  header1 = 'Example Header';
  header2 = 'Another Header';

  actions = 'Actions';
  actionResult: string;
  action1 = 'Add';
  action2 = 'Remove';

  listItems = 'List Items';

  actionClicked1(event) {
    this.actionResult = this.action1 + ' clicked';
  }

  actionClicked2(event) {
    this.actionResult = this.action2 + ' clicked';
  }

}
