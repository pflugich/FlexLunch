import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavTitleText() {
    return element(by.id('nav-title')).getText() as Promise<string>;
  }

  setUsernameInInput() {
    return element(by.id('username-input')).sendKeys('Peter');
  }

  getSubmitButton() {
    return element(by.id('set-username-option'));
  }

  getUserIdentifier() {
    return element(by.id('user-name')).getText() as Promise<string>;
  }
}
