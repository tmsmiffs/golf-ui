import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input() text: string;
  @Output() selected = new EventEmitter();

  onClick() {
    this.selected.emit();
  }
}
