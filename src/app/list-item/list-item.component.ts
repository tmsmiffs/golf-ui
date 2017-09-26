import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() text: string;
  @Input() buttonText = 'Remove';
  @Output() itemRemoved = new EventEmitter();

  show = false;

  showButton() {
    this.show = true;
  }

  hideButton() {
    this.show = false;
  }

  removeItem() {
    this.itemRemoved.emit();
  }
}
