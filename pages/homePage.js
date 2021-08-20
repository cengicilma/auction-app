var homePage = function() {
    this.loginButton = element(by.linkText('Login'));
    this.firstProduct = element(by.xpath('//*[@id="new-arrivals"]/app-grid-layout/div/div[1]/app-grid-item/div'));
}

module.exports = new homePage();