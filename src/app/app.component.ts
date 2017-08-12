import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golf-ui';
  header1 = 'Golf Stats';
  header2 = 'Course List';
  action1 = 'Add';
  action2 = 'Remove';
}
