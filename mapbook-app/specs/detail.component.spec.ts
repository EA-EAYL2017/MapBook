import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from '../src/app/detail/detail.component';
import { element, by, browser } from 'protractor';

describe('DetailComponent', () => {

  it('should have update button', () => {
    browser.get('http://localhost:8001');
    element(by.id('item')).click();
    expect(element(by.id('update')).getText()).toEqual("Update");
  }); 
});
