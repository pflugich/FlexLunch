url='http://localhost:4200/options-overview';

//ANmeldung an ATKIS
describe('Anmeldung an flexlunch', function() {
    it('flex_lunch Anmeldung', function() {

         browser.driver.get(url);
    
        browser.driver.findElement(by.id('mat-input-0')).sendKeys('Peter');
        //await browser.driver.findElement(by.id('password')).sendKeys('test');
        browser.driver.findElement(by.class('mat-button-ripple mat-ripple')).click();
    
        expect(browser.driver.findElement(by.id('user-name').gettext())).toBe('Eingeloggt als: Peter')
      }
 

    });
  });