var loginPage = function() {
    this.email = element(by.id('email'));
    this.password = element(by.name('password'));
    this.submitButton = element(by.id('submitButton'));
}

module.exports = new loginPage();