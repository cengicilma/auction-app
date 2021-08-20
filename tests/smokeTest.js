// smokeTest.js
describe('Auction app smoke test', function() {
    var EC = protractor.ExpectedConditions;

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('https://auctionare.herokuapp.com/');
    });

    var data = require('./data/data.js');
    var homePage = require('./pages/homePage.js');
    var loginPage = require('./pages/loginPage.js');
    var productPage = require('./pages/productPage.js');
    
    it('smoke test', function() {

      homePage.loginButton.click();

      loginPage.email.sendKeys(data.email);
      loginPage.password.sendKeys(data.password);
      loginPage.submitButton.click();

      homePage.firstProduct.click();

      productPage.bidAmount.sendKeys(productPage.currentPriceFloat + 1);
      productPage.placeBidButton.click();
      expect(productPage.successMessage.toEqual(data.successMessage));
    });
  });