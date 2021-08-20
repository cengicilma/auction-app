var productPage = function() {
    this.currentPrice = element(by.css('.bidsInfo.ng-star-inserted'));
    this.currentPriceFloat = parseFloat(this.currentPrice);

    this.bidAmount = element(by.id('amount'));
    this.placeBidButton = element(by.id('submitButton'));

    this.successMessage = element(by.xpath('//span[text()="Congrats, you are the highest bidder!"]'));

    
}

module.exports = new productPage();