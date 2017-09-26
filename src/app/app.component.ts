import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ItemData } from './item-data';
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
  actionSyntax = `
  <app-action text="Add" (selected)="actionClicked($event)"></app-action>`;

  listItemSyntax = `
  // The default button text is Remove.
  <app-list-item [itemData]="data" (itemRemoved)="listItemRemoved()"></app-list-item>

  // This list item button text is Delete.
  <app-list-item [itemData]="data" buttonText="Delete" (itemRemoved)="listItemRemoved()"></app-list-item>

  // The ItemData class has two properties: columnOne and columnTwo.  Use the optional ItemData.columnTwo
  // property to add a second column.`;

  itemData1 = new ItemData(`This is a one column list item with a lot of text. Wrapping occurrs when there is too much
    text for one line.  Also notice that as the text wraps the row height increases.  Finally on mouse over a Remove button appears.`);

  itemData2 = new ItemData(`This is another list item with a bunch of text to prove thtat wrapping works as expected.`,
    `It has two columns and if enough text is entered then wrapping occurrs in this column too.`);

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

  listItemRemoved() {
    console.log('item removed');
  }

  ngAfterViewInit() {
    Prism.highlightAll(true);
  }
}
