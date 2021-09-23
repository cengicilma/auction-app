var Data = require("../data/Data.js");
var Page = require("./Page");

class LoginPage extends Page {
    //Getters
    get emailField() { return browser.driver.findElement(by.id('email')); }
    get passwordFiled() { return browser.driver.findElement(by.name('password')); }
    get submitButton() { return browser.driver.findElement(by.id('submitButton')); }

    //Actions
    logInWithValidCredentials(email, password) {
        return this.emailField.sendKeys(email)
            .then(() => this.passwordFiled.sendKeys(password))
            .then(() => this.submitButton.click());        
    }

}

module.exports = LoginPage;