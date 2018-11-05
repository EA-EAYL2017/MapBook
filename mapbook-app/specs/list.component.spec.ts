import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from '../src/app/list/list.component';
import { browser, element, by } from 'protractor';

describe('ListComponent', () => {
  it('should be present on the page', () => {
    browser.get('http://localhost:8001');
    expect(element(by.id('title')).getText()).toEqual("Courses");
  });
});
