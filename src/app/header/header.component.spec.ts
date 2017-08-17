import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it(`should display header text in uppercase`, () => {
    comp.headerText = 'Golf Stats';
    comp.upper = true;
    fixture.detectChanges();

    expect(el.textContent).toEqual('GOLF STATS');
  });

  it('should display header text as provided', () => {
    comp.headerText = 'HeaDer';
    fixture.detectChanges();

    expect(el.textContent).toEqual('HeaDer');
  });

});
