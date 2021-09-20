//Page.js
class Page {
    constructor() {
        this.title = "Page";
    }

    //Actions
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

}

module.exports = Page;