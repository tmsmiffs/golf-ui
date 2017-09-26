import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemData } from '../item-data'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() itemData: ItemData;
  @Input() buttonText = 'Remove';
  @Output() itemRemoved = new EventEmitter();

  show = false;
  twoColumns = false;

  ngOnInit() {
    this.twoColumns = !!this.itemData.columnTwo;
  }

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
