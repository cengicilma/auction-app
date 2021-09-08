var LoginPage = require("../pages/LoginPage.js");
var Page = require("../pages/Page.js");
var ProductPage = require("../pages/ProductPage.js");
var Data = require("../data/Data.js");
var HomePage = require("../pages/homePage.js");
var SearchPage = require("../pages/SearchPage.js");

const homePage = new HomePage();
const loginPage = new LoginPage();
const data = new Data();
const searchPage = new SearchPage();
const productPage = new ProductPage();
const page = new Page();

describe('Smoke test', function() {

  beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      browser.get('https://auctionare.herokuapp.com/');
    });

    it('should verify that user is able to sign in, navigate through the application, select an item and place a bid', function() {
      homePage.clickLoginBtn();
      loginPage.logInWithValidCredentials(data.validEmail, data.validPassword);
      homePage.search('women \n');

      page.sleep(2000);
      searchPage.firstProduct.click();

      productPage.setBidAmount();
      productPage.checkSuccessMessage();    
    });
    
 });
