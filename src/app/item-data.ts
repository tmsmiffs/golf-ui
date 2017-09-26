export class ItemData {
  columnOne: string;
  columnTwo: string;

  constructor(columnOne: string, columnTwo?: string) {
    this.columnOne = columnOne;
    this.columnTwo = columnTwo;
  }
}
