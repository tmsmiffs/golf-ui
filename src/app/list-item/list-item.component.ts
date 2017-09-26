import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() columnOne: string;
  @Input() columnTwo: string;
  @Input() buttonText = 'Remove';
  @Output() itemRemoved = new EventEmitter();

  show = false;
  twoColumns = false;

  ngOnInit() {
    this.twoColumns = !!this.columnTwo;
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
