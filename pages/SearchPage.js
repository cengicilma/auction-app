var Page = require("../pages/Page.js");

class SearchPage extends Page {
    //Getters
    get firstProduct() { return browser.driver.findElement(by.xpath("(//div[contains(@class, 'grid-item')])[1]")); }

    //Actions
    firstProductClick() {
        return this.firstProduct.click()
    }
    
}

module.exports = SearchPage;