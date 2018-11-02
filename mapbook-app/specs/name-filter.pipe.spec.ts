import { NameFilterPipe } from '../src/app/name-filter.pipe';
import { browser, element, by } from 'protractor';

describe('NameFilterPipe', () => {
  it('should find a result', () => {
    browser.get('http://localhost:8001');
    element(by.id('filter')).sendKeys('App');
    expect(element(by.id('item')).getText()).toContain("Apprentice");
  });

  it('shouldnt find result for negative search term', () => {
    browser.get('http://localhost:8001');
    element(by.id('filter')).sendKeys('Awfwfwef');
    expect(element(by.id('item'))).toBeUndefined();
  });
});
