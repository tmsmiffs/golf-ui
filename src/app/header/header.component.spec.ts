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
  });

  it(`should display header text in uppercase`, () => {
    comp.text = 'This is a header';
    comp.upper = true;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toEqual('THIS IS A HEADER');
  });

  it('should display header text as provided', () => {
    comp.text = 'tHis Is a HeaDer';
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toEqual('tHis Is a HeaDer');
  });

  it('should display header as h1', () => {
    comp.text = 'header';
    comp.size = 'h1';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

  it('should display header as h2', () => {
    comp.text = 'header';
    comp.size = 'h2';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

  it('should display header as h3', () => {
    comp.text = 'header';
    comp.size = 'h3';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

  it('should display header as h4', () => {
    comp.text = 'header';
    comp.size = 'h4';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h4'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

  it('should display header as h5', () => {
    comp.text = 'header';
    comp.size = 'h5';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h5'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

  it('should display header as h6', () => {
    comp.text = 'header';
    comp.size = 'h6';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h6'));
    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.textContent).toContain('header');
  });

});
