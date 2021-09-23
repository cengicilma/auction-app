var Data = require("../data/Data.js");
var Page = require("./Page.js");

const data = new Data();

class ProductPage extends Page {
     
    
    //Getters
    get currentPrice() { return browser.driver.findElement(by.css('.purpleFont.ng-star-inserted')); }
    get bidAmountInput() { return browser.driver.findElement(by.xpath("//INPUT[@id='amount']")); }
    get placeBidButton() { return browser.driver.findElement(by.id('submitButton')); }
    get successMessage() { return browser.driver.findElement(by.xpath('//span[text()="Congrats, you are the highest bidder!"]')); }
    get failMessage() { return browser.driver.findElement(by.xpath('//span[contains(text(), "There are higher bids than yours. You could give it a second try!")]')); }

    //Actions
    setBidAmount() {
        return this.bidAmountInput.sendKeys(100);
    }

    clickPlaceBidBtn() {
        return this.placeBidButton.click();
    }

    checkSuccessMessage() {
        return (expect(this.successMessage.getText()).toEqual(data.succesMessage) || expect(this.failMessage.getText()).toEqual(data.successMessageFail));
    }
}

module.exports = ProductPage;