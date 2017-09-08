import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import 'prismjs/prism';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'golf-ui';

  headerSyntax = `
  // h1 header uppercase with one-time string initialization
  <app-header text="h1 header uppercase" size="h1" upper="true"></app-header>

  // h2 header as entered case with property binding
  <app-header [text]="h2Header" [size]="sizeH2"></app-header>`;

  addActionResult: string;
  removeActionResult: string;
  resetActionResult: string;
  actionSyntax = `<app-action text="Add" (selected)="actionClicked($event)"></app-action>`;

  listItemSyntax = `<app-list-item></app-list-item>`;

  addClicked(event) {
    // figure out why event is undefined
    // I thought it would pass in the $event which should be click
    this.addActionResult = 'Add clicked';
  }

  removeClicked(event) {
    this.removeActionResult = 'Remove clicked';
  }

  resetClicked(event) {
    this.addActionResult = '';
    this.removeActionResult = '';
  }

  ngAfterViewInit() {
    Prism.highlightAll(true);
  }
}
