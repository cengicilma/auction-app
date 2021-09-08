var Page = require("../pages/Page.js");

class HomePage extends Page {
    //Getters
    get loginButton() { return browser.driver.findElement(by.id('login-link')); }
    get searchInput() { return browser.driver.findElement(by.id('product-search-input')); }
    get searchButton() { return browser.driver.findElement(by.id('search-icon')); }

    //Actions
    clickLoginBtn() {
        this.sleep(2000);
        this.loginButton.click();
    }

    search(text) {
        this.sleep(2000);
        this.searchInput.sendKeys(text);
    }
}

module.exports = HomePage;