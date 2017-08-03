import { Component, Input } from '@angular/core';

@Component({
  selector: 'gui-header',
  templateUrl: './gui-header.component.html',
  styleUrls: ['./gui-header.component.css']
})
export class GuiHeaderComponent {
  @Input() headerText: string;

}
