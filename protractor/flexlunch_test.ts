import { browser, element, by } from 'protractor';

const url = 'http://localhost:4200/options-overview';

// ANmeldung an ATKIS
describe('Anmeldung an flexlunch', () => {
  it('flex_lunch Anmeldung', () => {
    get(){
      browser.driver.get(url);
    }

    element(by.id('username-input')).sendKeys('Peter');
    // await browser.driver.findElement(by.id('password')).sendKeys('test');
    element(by.id('set-username-option')).click();

    expect(element(by.id('user-name')).getText()).toBe('Eingeloggt als: Peter');
  });
});
