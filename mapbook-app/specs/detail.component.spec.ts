import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from '../src/app/detail/detail.component';
import { element, by, browser } from 'protractor';

describe('DetailComponent', () => {

  it('should have update button', () => {
    browser.get('http://localhost:8001');
    element(by.id('item')).click();
    expect(element(by.id('apply')).getText()).toEqual("Apply to Course");
  }); 

  it('Should have headers', () => {
    browser.get('http://localhost:8001');
    element(by.id('item')).click();
    expect(element(by.id('detail')).getText()).toContain("Name:");
    expect(element(by.id('detail')).getText()).toContain("Date:");
    expect(element(by.id('detail')).getText()).toContain("Location:");
    expect(element(by.id('detail')).getText()).toContain("Description:");
    expect(element(by.id('detail')).getText()).toContain("Target Audience:");
    expect(element(by.id('detail')).getText()).toContain("Duration:");
    expect(element(by.id('detail')).getText()).toContain("Trainer:");
  })
});
