/**import { browser, element, by } from 'protractor';

const url = 'http://localhost:4200/options-overview';

// ANmeldung an ATKIS
describe('Anmeldung an flexlunch', () => {
  beforeEach(() => {
    browser.driver.get(url);
  });

  it('flex_lunch Anmeldung', () => {
    /**element(by.id('username-input')).sendKeys('Peter');
    // await browser.driver.findElement(by.id('password')).sendKeys('test');
    element(by.id('set-username-option')).click();

    const userIdentification = element(by.id('user-name')).getText();

    expect(userIdentification).toBe('Eingeloggt als: Peter');/
    const userIdentification = element(by.id('nav-title')).getText();
    expect(userIdentification).toBe('FlexLunch');
  });
});*/

import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user', () => {
    element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos', function() {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an angular app');
  });
});
