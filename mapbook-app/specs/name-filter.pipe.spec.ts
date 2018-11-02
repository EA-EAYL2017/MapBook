import { NameFilterPipe } from '../src/app/name-filter.pipe';
import { browser, element, by } from 'protractor';

describe('NameFilterPipe', () => {
  it('create an instance', () => {
    browser.get('http://localhost:8001');
    element(by.id('filter')).sendKeys('App');
    expect(element(by.id('item')).getText()).toContain("Apprentice");
  });
});
