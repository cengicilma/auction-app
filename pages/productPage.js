var Data = require("../data/Data.js");
var Page = require("./Page.js");

const data = new Data();

class ProductPage extends Page {
    //Getters
    get currentPriceText() { return browser.driver.findElement(by.css('.bidsInfo.ng-star-inserted')); }
    get currentPriceFloat() { return parseFloat(this.currentPriceText); }
    get bidAmountInput() { return browser.driver.findElement(by.id('amount')); }
    get placeBidButton() { return browser.driver.findElement(by.id('submitButton')); }
    get successMessage() { return browser.driver.findElement(by.xpath('//span[text()="Congrats, you are the highest bidder!"]')); }

    //Actions
    setBidAmount() {
        this.bidAmountInput.sendKeys(this.currentPriceFloat + 1);
    }

    clickPlaceBidBtn() {
        this.placeBidButton.click();
    }

    checkSuccessMessage() {
        expect(this.successMessage.getText()).toEqual(data.succesMessage);
    }
}

module.exports = ProductPage;