import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { ActionComponent } from './action.component';

@Component({
  template: `<app-action [text]="text" (selected)="onSelected($event)"></app-action>`
})
class TestHostComponent {
  result: string;
  text = 'Add';
  onSelected(event) {
    this.result = 'Added';
  }
}

describe('ActionComponent', () => {

  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;

  // using anync here because the component template is external
  // but this isn't actually required when using WebPack
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionComponent, TestHostComponent ]
    }).compileComponents();
  }));

  // second beforeEach is synchronous and contains the remaining setup
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('.action-button'));

    fixture.detectChanges();
  });

  it('should display action text', () => {
    expect(el.nativeElement.textContent).toContain('Add');
  });

  it('should execute callback on click', () => {
    expect(testHost.result).toBe(undefined);
    el.triggerEventHandler('click', null);
    expect(testHost.result).toBe('Added');
  });

});
