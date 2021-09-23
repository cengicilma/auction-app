var Page = require("../pages/Page.js");

class HomePage extends Page {
    //Getters
    get loginButton() { return browser.driver.findElement(by.id('login-link')); }
    get searchInput() { return browser.driver.findElement(by.id('product-search-input')); }
    get searchButton() { return browser.driver.findElement(by.id('search-icon')); }

    //Actions
    clickLoginBtn() {
        return this.loginButton.click();
    }

    search(text) {
        return this.searchInput.sendKeys(text)
            .then(() => this.searchButton.click());
    }
}

module.exports = HomePage;