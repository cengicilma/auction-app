var Page = require("../pages/Page.js");
var HomePage = require("../pages/homePage.js");
var LoginPage = require("../pages/LoginPage.js");
var Data = require("../data/Data.js");
var SearchPage = require("../pages/SearchPage.js");
var ProductPage = require("../pages/ProductPage.js");

const page = new Page();
const homePage = new HomePage();
const loginPage = new LoginPage();
const data = new Data();
const searchPage = new SearchPage();
const productPage = new ProductPage();

describe('Login and Register', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('https://auctionare.herokuapp.com/');
    });

    it('should verify that user is able to login to the application using correct email address and password', function() {
          page.sleep(2000)
            .then(() => homePage.clickLoginBtn())
            .then(() => loginPage.logInWithValidCredentials(data.validEmail, data.validPassword))
    });

    it('should verify  that user is not able to login using correct email and incorrect password', function() {
        page.sleep(2000)
            .then(() => homePage.clickLoginBtn())
            .then(() => loginPage.logInWithValidCredentials(data.validEmail, data.invalidPassword))
    });

    it('should verify that unregistered user is not able to place a bid for product', function() {
        homePage.search('women')
            .then(() => page.sleep(5000))
            .then(() => searchPage.firstProductClick())
            .then(() => page.sleep(2000))
            .then(() => expect(productPage.bidAmountInput.isPresent()).toBe(false))
    });
});