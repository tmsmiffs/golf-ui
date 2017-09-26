import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { ListItemComponent } from './list-item.component';
import { ActionComponent } from './../action/action.component';
import { ItemData } from '../item-data';


@Component({
  template: `<app-list-item [itemData]="itemData" buttonText="Delete" (itemRemoved)="listItemRemoved()"></app-list-item>`
})
class TestHostComponent {
  itemData: ItemData = new ItemData('This is a list item.');
  result: string;
  listItemRemoved() {
    this.result = 'Item Removed';
  }
}

describe('ListItemComponent', () => {

  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let listItemElement: DebugElement;
  let itemActionElement: DebugElement;
  let actionElement: DebugElement;


  // using anync here because the component template is external
  // but this isn't actually required when using WebPack
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent, ActionComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  // second beforeEach is synchronous and contains the remaining setup
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    listItemElement = fixture.debugElement.query(By.css('.list-item'))
    listItemElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    itemActionElement = fixture.debugElement.query(By.css('.list-item .action'));
    actionElement = fixture.debugElement.query(By.css('.action-button'));
  });

  it('should display item text', () => {
    expect(listItemElement.nativeElement.textContent).toContain('This is a list item');
  });

  it('should display action button on hover', () => {
    expect(itemActionElement).toBeTruthy();
  });

  it('should remove action button on mouseleave', () => {
    listItemElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    itemActionElement = fixture.debugElement.query(By.css('.list-item .action'));
    expect(itemActionElement).toBeFalsy();
  });

  it('should override default Remove text with Delete', () => {
    expect(actionElement.nativeElement.textContent).toContain('Delete');
  })

  it('should execute callback on click', () => {
    expect(testHost.result).toBe(undefined);
    actionElement.triggerEventHandler('click', null);
    expect(testHost.result).toBe('Item Removed');
  });

  it('should only have one column', () => {
    const el = fixture.debugElement.query(By.css('.item.col-6'));
    expect(el).toBeTruthy();
  });

});


// Currently I am using two TestHostComponents because I don't yet know how to modify
// properties of the test host for different tests.  I'm sure it can be done.


@Component({
  template: `<app-list-item [itemData]="itemData" (itemRemoved)="listItemRemoved()"></app-list-item>`
})
class TestHost2Component {
  itemData: ItemData = new ItemData('This is a list item.', 'It has two columns');
  result: string;
  listItemRemoved() {
    this.result = 'Item Removed';
  }
}

describe('ListItemComponent', () => {

  let testHost: TestHost2Component;
  let fixture: ComponentFixture<TestHost2Component>;
  let listItemElement: DebugElement;
  let actionElement: DebugElement;


  // using anync here because the component template is external
  // but this isn't actually required when using WebPack
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent, ActionComponent, TestHost2Component ]
    })
    .compileComponents();
  }));

  // second beforeEach is synchronous and contains the remaining setup
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHost2Component);
    testHost = fixture.componentInstance;
    listItemElement = fixture.debugElement.query(By.css('.list-item'))
    listItemElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    actionElement = fixture.debugElement.query(By.css('.action-button'));
  });

  it('should display default Remove button', () => {
    expect(actionElement.nativeElement.textContent).toContain('Remove');
  });

  it('should have two columns', () => {
    const el = fixture.debugElement.query(By.css('.item.col-4'));
    expect(el).toBeTruthy();
  });

});
