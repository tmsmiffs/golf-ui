import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuiHeaderComponent } from './gui-header.component';

describe('GuiHeaderComponent', () => {

  let comp: GuiHeaderComponent;
  let fixture: ComponentFixture<GuiHeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiHeaderComponent]
    });

    fixture = TestBed.createComponent(GuiHeaderComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it(`should display header text in uppercase`, () => {
    comp.headerText = "Golf Stats";
    fixture.detectChanges();

    expect(el.textContent).toEqual('GOLF STATS');
  });

});
