import { Component, Output, EventEmitter } from '@angular/core';
import 'prismjs/prism';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

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

  headerSyntax =`<app-header [headerText]="header" [upper]="true"></app-header>`;

  actions = 'Actions';
  addAction = 'Add';
  addActionResult: string;
  removeAction = 'Remove';
  removeActionResult: string;

  listItems = 'List Items';

  actionSyntax = `<app-action [actionText]="action" (selected)="actionClicked($event)"></app-action>`;


  addClicked(event) {
    this.addActionResult = this.addAction + ' clicked';
  }

  removeClicked(event) {
    this.removeActionResult = this.removeAction + ' clicked';
  }

  ngAfterViewInit() {
    Prism.highlightAll(true);
  }
}
