var Page = require("../pages/Page.js");
var HomePage = require("../pages/homePage.js");
var LoginPage = require("../pages/LoginPage.js");
var Data = require("../data/Data.js");

const page = new Page();
const homePage = new HomePage();
const loginPage = new LoginPage();
const data = new Data();

describe('Login and Register', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('https://auctionare.herokuapp.com/');
      });

      it('should verify that user is able to login to the application using correct email address and password', function() {
          page.sleep(2000);
          homePage.clickLoginBtn();
          loginPage.logInWithValidCredentials(data.validEmail, data.validPassword);
      });

      it('should verify  that user is not able to login using correct email and incorrect password', function() {
        page.sleep(2000);
        homePage.clickLoginBtn();
        loginPage.logInWithValidCredentials(data.validEmail, data.invalidPassword);
    });

});